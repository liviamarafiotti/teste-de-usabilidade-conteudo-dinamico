import type { ReactNode } from "react";
import Icon from "./Icon";
import Overlay from "./Overlay";

type DrawerProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  width?: number;
  /** Offset from the top of the frame (keeps the editor chrome visible). */
  top?: number;
};

/** Right-side overlay drawer used for the "Conteúdo dinâmico" flow. */
export default function Drawer({ title, children, footer, onClose, width = 600, top = 110 }: DrawerProps) {
  return (
    <>
      <Overlay onClick={onClose} style={{ top }} className="z-40" />
      <aside
        style={{ width, top }}
        className="absolute bottom-0 right-0 z-50 flex animate-slide-in-right flex-col bg-white shadow-drawer"
      >
        <header className="flex items-start gap-6 border-b border-border-soft p-6">
          <h2 className="flex-1 pt-1 font-dm text-[20px] font-bold leading-[1.5] tracking-[-0.2px] text-ink-dark">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-lg text-ink-high transition-colors hover:bg-fieldbg"
          >
            <Icon name="close" size={24} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 pt-6">{children}</div>

        {footer && <div className="flex justify-end border-t border-border-soft p-6">{footer}</div>}
      </aside>
    </>
  );
}
