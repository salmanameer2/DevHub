import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ToolLogo({ tool, className, size = 40 }) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2 text-sm font-semibold",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {failed || !tool.logo ? (
        <span aria-hidden="true">{tool.name.charAt(0)}</span>
      ) : (
        <img
          src={tool.logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={size}
          height={size}
          className="h-1/2 w-1/2 object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
