import type { ReactNode } from "react";
import Icon from "./Icon";
import Overlay from "./Overlay";

type ModalProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  width?: number;
};

export default function Modal({ title, children, footer, onClose, width = 600 }: ModalProps) {
  return (
    <>
      <Overlay onClick={onClose} className="z-[60]" />
      <div className="absolute inset-0 z-[70] flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          style={{ width }}
          className="max-w-full animate-scale-in overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <div className="flex items-start gap-4 px-6 pt-6">
            <h2 className="flex-1 font-dm text-[20px] font-bold leading-[1.4] tracking-[-0.2px] text-ink-dark">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="-mr-1 text-icon-low transition-colors hover:text-ink-high"
            >
              <Icon name="close" size={24} />
            </button>
          </div>
          <div className="px-6 pb-2 pt-4 font-nunito ss02 text-[16px] leading-[1.5] tracking-[-0.16px] text-ink-high">
            {children}
          </div>
          {footer && <div className="flex items-center justify-end gap-3 px-6 pb-6 pt-2">{footer}</div>}
        </div>
      </div>
    </>
  );
}
