import { cn } from "../../lib/cn";

type SwitchProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export default function Switch({ checked, onChange, disabled, "aria-label": ariaLabel }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative h-6 w-12 shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-link/40 disabled:opacity-50",
        checked ? "bg-primary-surface" : "bg-[#c2c8ce]"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-in-out",
          checked && "translate-x-6"
        )}
      />
    </button>
  );
}
