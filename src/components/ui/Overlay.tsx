import { cn } from "../../lib/cn";

type OverlayProps = {
  onClick?: () => void;
  className?: string;
  /** Restrict the overlay to a sub-region instead of the whole frame. */
  style?: React.CSSProperties;
};

export default function Overlay({ onClick, className, style }: OverlayProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn("absolute inset-0 z-40 bg-[#021c2b]/40 animate-fade-in", className)}
    />
  );
}
