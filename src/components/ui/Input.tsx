import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Editable text input — placeholder = "default" state, typed value = "filled" state.
 */
export default function Input({ label, className, id, ...props }: InputProps) {
  return (
    <label className="flex w-full flex-col gap-2">
      {label && (
        <span className="font-nunito ss02 text-[16px] font-bold tracking-[-0.16px] text-ink-high">{label}</span>
      )}
      <input
        id={id}
        className={cn(
          "h-10 w-full rounded-sm border border-border-interactive bg-white px-3 py-2",
          "font-nunito ss02 text-[16px] tracking-[-0.16px] text-ink-high",
          "placeholder:text-ink-low",
          "transition-colors duration-200 ease-in-out",
          "focus:border-primary-link focus:outline-none focus:ring-2 focus:ring-primary-link/20",
          className
        )}
        {...props}
      />
    </label>
  );
}
