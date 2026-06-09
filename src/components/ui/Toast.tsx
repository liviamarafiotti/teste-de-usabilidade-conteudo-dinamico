import { useEffect } from "react";
import Icon from "./Icon";

type ToastProps = {
  title: string;
  description?: string;
  onClose: () => void;
  duration?: number;
};

export default function Toast({ title, description, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div className="absolute right-6 top-[60px] z-[80] w-[300px] animate-toast-in overflow-hidden rounded-md bg-white shadow-lg">
      <div className="flex gap-3 border-l-8 border-success px-4 py-3">
        <span className="mt-0.5 shrink-0 text-success">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success text-white">
            <Icon name="check" size={14} />
          </span>
        </span>
        <div className="flex-1">
          <p className="font-nunito ss02 text-[14px] font-bold leading-[1.4] tracking-[-0.14px] text-ink-high">
            {title}
          </p>
          {description && (
            <p className="mt-1 font-nunito ss02 text-[14px] leading-[1.4] tracking-[-0.14px] text-ink-low">
              {description}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="-mr-1 -mt-1 h-5 shrink-0 text-icon-low transition-colors hover:text-ink-high"
        >
          <Icon name="close" size={18} />
        </button>
      </div>
    </div>
  );
}
