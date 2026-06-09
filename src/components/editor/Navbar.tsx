import Switch from "../ui/Switch";
import { useState } from "react";
import { asset } from "../../lib/asset";

const divider = <span className="h-11 w-px shrink-0 bg-border" />;
const text = "font-nunito ss02 text-[14px] tracking-[-0.14px] text-ink-high whitespace-nowrap";

export default function Navbar() {
  const [autosave, setAutosave] = useState(true);

  return (
    <header className="relative z-30 flex h-11 items-center bg-surface shadow-nav">
      <div className="flex shrink-0 items-center px-4">
        <span className="flex h-6 items-center gap-2" role="img" aria-label="RD Station Marketing">
          <img src={asset("assets/logo-symbol.svg")} alt="" aria-hidden className="h-6 w-5" />
          <span className="h-4 w-px bg-black/25" />
          <img src={asset("assets/logo-marketing.svg")} alt="" aria-hidden className="h-4 w-[78px]" />
        </span>
      </div>

      <div className="flex h-11 flex-1 items-center justify-between">
        <div className="flex h-11 items-center gap-4">
          {divider}
          <span className={text}>Landing Pages</span>
          {divider}
          <span className={`${text} font-bold`}>Teste liv 2025</span>
        </div>

        <div className="flex h-11 items-center gap-4 pr-4">
          {divider}
          <span className={text}>Salvamento automático</span>
          <Switch checked={autosave} onChange={setAutosave} aria-label="Salvamento automático" />
          {divider}
          <span className={text}>Automation tribe</span>
          {divider}
          <button type="button" className={text}>
            Sair do editor
          </button>
        </div>
      </div>
    </header>
  );
}
