import { useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";

type TooltipProps = {
  text: string;
  /** Only render the tooltip on hover when enabled. */
  enabled?: boolean;
  side?: "top" | "bottom";
  className?: string;
  children: ReactNode;
};

/**
 * Tangram tooltip (dark surface). Hover is tracked on the wrapper so it still
 * works when the wrapped control is disabled (which has pointer-events: none).
 */
export default function Tooltip({ text, enabled = true, side = "top", className, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const visible = enabled && show;

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute left-1/2 z-[90] w-max max-w-[240px] -translate-x-1/2 animate-fade-in",
            side === "top" ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
          )}
        >
          <span className="block rounded-sm bg-ink-high px-3 py-2 text-center font-nunito ss02 text-[14px] leading-[1.4] tracking-[-0.14px] text-white">
            {text}
          </span>
          <span
            className={cn(
              "absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-ink-high",
              side === "top" ? "top-full -mt-1" : "bottom-full -mb-1"
            )}
          />
        </span>
      )}
    </span>
  );
}
