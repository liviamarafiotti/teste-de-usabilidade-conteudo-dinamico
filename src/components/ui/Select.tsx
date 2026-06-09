import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";
import Icon from "./Icon";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  label?: string;
  value: string | null;
  placeholder?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
  menuClassName?: string;
};

export default function Select({
  label,
  value,
  placeholder = "Selecione",
  options,
  onChange,
  className,
  menuClassName,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <span className="font-nunito ss02 text-[16px] font-bold tracking-[-0.16px] text-ink-high">{label}</span>
      )}
      <div ref={ref} className={cn("relative", className)}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-full items-center gap-2 rounded-sm border border-border-interactive bg-white pl-3 pr-2 py-2",
            "font-nunito ss02 text-[16px] tracking-[-0.16px] text-left",
            "transition-colors duration-200 ease-in-out hover:border-ink-low focus:border-primary-link focus:outline-none"
          )}
        >
          <span className={cn("flex-1 truncate", selected ? "text-ink-high" : "text-ink-low")}>
            {selected ? selected.label : placeholder}
          </span>
          <Icon
            name="caret-down"
            size={20}
            className={cn("shrink-0 text-icon-low transition-transform duration-200", open && "rotate-180")}
          />
        </button>

        {open && (
          <div
            className={cn(
              "absolute left-0 right-0 top-[calc(100%+4px)] z-50 overflow-hidden rounded-md border border-border bg-white py-1 shadow-popover",
              "animate-fade-in",
              menuClassName
            )}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center px-3 py-2 text-left font-nunito ss02 text-[16px] tracking-[-0.16px] transition-colors duration-150",
                  opt.value === value ? "bg-primary-70/5 text-ink-high" : "text-ink-high hover:bg-fieldbg"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
