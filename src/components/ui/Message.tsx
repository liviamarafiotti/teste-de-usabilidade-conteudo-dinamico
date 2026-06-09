import type { ReactNode } from "react";
import Icon from "./Icon";

type MessageProps = {
  children: ReactNode;
};

/** Tangram "Message" — informational callout with a highlight left border. */
export default function Message({ children }: MessageProps) {
  return (
    <div className="flex w-full overflow-hidden rounded-md border-l-8 border-highlight bg-white">
      <div className="flex flex-1 items-center gap-4 rounded-r-md border-y border-r border-border-soft px-4 py-3">
        <span className="shrink-0 pt-1 text-highlight">
          <Icon name="info" size={24} />
        </span>
        <div className="flex-1 font-nunito ss02 text-[16px] leading-[1.5] tracking-[-0.16px] text-ink-high">
          {children}
        </div>
      </div>
    </div>
  );
}
