import { useState } from "react";
import "./Switch.css";

type SwitchProps = {
  defaultChecked?: boolean;
  "aria-label"?: string;
};

export default function Switch({
  defaultChecked = true,
  "aria-label": ariaLabel,
}: SwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`switch${checked ? " switch--on" : ""}`}
      onClick={() => setChecked((v) => !v)}
    >
      <span className="switch__knob" />
    </button>
  );
}
