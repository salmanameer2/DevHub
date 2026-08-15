export default function LoadingState({ count = 8 }) {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-busy="true"
      aria-live="polite"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="gradient-border-card relative h-64 overflow-hidden rounded-3xl p-6"
        >
          {/* Cinematic laser scan shimmer bar */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 animate-pulse rounded-2xl bg-surface-2/80" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-28 animate-pulse rounded-lg bg-surface-2/80" />
              <div className="h-3 w-16 animate-pulse rounded-lg bg-surface-2/50" />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-3 w-full animate-pulse rounded-lg bg-surface-2/60" />
            <div className="h-3 w-4/5 animate-pulse rounded-lg bg-surface-2/40" />
          </div>

          <div className="mt-6 flex gap-2">
            <div className="h-6 w-14 animate-pulse rounded-full bg-surface-2/50" />
            <div className="h-6 w-16 animate-pulse rounded-full bg-surface-2/50" />
          </div>

          <div className="mt-6 flex gap-2">
            <div className="h-9 flex-1 animate-pulse rounded-xl bg-surface-2/60" />
            <div className="h-9 flex-1 animate-pulse rounded-xl bg-surface-2/40" />
          </div>
        </div>
      ))}
    </div>
  );
}

