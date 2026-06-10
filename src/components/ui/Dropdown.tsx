import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../lib/cn";

type DropdownProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  /** Anchor offset styles (absolute positioning relative to the trigger wrapper). */
  style?: React.CSSProperties;
};

/** Floating menu surface. Anchor by wrapping the trigger in a `relative` element. */
export default function Dropdown({ open, onClose, children, className, style }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "absolute z-50 min-w-[205px] animate-fade-in overflow-hidden rounded-sm border border-border bg-white py-2 shadow-nav",
        className
      )}
    >
      {children}
    </div>
  );
}

type DropdownItemProps = {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  bold?: boolean;
};

export function DropdownItem({ children, onClick, active, bold }: DropdownItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center px-4 py-2 text-left font-nunito ss02 text-[14px] tracking-[-0.14px] transition-colors duration-150",
        active ? "bg-primary-70/5 text-ink-high" : "text-ink-high hover:bg-fieldbg",
        bold && "font-bold"
      )}
    >
      {children}
    </button>
  );
}
