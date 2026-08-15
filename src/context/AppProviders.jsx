import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE = {
  theme: "devhub.theme",
  favorites: "devhub.favorites",
  recent: "devhub.recent",
  searches: "devhub.searches",
};

const read = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
};

/* ----------------------------- Theme ----------------------------- */

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

/* --------------------------- Favorites --------------------------- */

const LibraryContext = createContext(null);

export function useLibrary() {
  const value = useContext(LibraryContext);
  if (!value) throw new Error("useLibrary must be used inside AppProviders");
  return value;
}

/* ------------------------ Command palette ------------------------ */

const PaletteContext = createContext({ open: false, setOpen: () => {} });

export function useCommandPalette() {
  return useContext(PaletteContext);
}

export function AppProviders({ children }) {
  const [theme, setTheme] = useState("dark");
  const [favorites, setFavorites] = useState([]);
  const [recent, setRecent] = useState([]);
  const [searches, setSearches] = useState([]);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    setTheme(read(STORAGE.theme, "dark"));
    setFavorites(read(STORAGE.favorites, []));
    setRecent(read(STORAGE.recent, []));
    setSearches(read(STORAGE.searches, []));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      write(STORAGE.theme, next);
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((slug) => {
    setFavorites((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [slug, ...current];
      write(STORAGE.favorites, next);
      return next;
    });
  }, []);

  const trackView = useCallback((slug) => {
    setRecent((current) => {
      const next = [slug, ...current.filter((item) => item !== slug)].slice(0, 12);
      write(STORAGE.recent, next);
      return next;
    });
  }, []);

  const trackSearch = useCallback((term) => {
    const value = term.trim();
    if (!value) return;
    setSearches((current) => {
      const next = [
        value,
        ...current.filter((item) => item.toLowerCase() !== value.toLowerCase()),
      ].slice(0, 6);
      write(STORAGE.searches, next);
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    write(STORAGE.favorites, []);
  }, []);

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  const libraryValue = useMemo(
    () => ({
      favorites,
      recent,
      searches,
      isFavorite: (slug) => favorites.includes(slug),
      toggleFavorite,
      trackView,
      trackSearch,
      clearFavorites,
    }),
    [favorites, recent, searches, toggleFavorite, trackView, trackSearch, clearFavorites],
  );
  const paletteValue = useMemo(
    () => ({ open: paletteOpen, setOpen: setPaletteOpen }),
    [paletteOpen],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <LibraryContext.Provider value={libraryValue}>
        <PaletteContext.Provider value={paletteValue}>{children}</PaletteContext.Provider>
      </LibraryContext.Provider>
    </ThemeContext.Provider>
  );
}
