import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant =
  | "primary" // teal solid (Salvar e avançar)
  | "inverse" // dark navy solid (drawer Salvar)
  | "soft" // light cyan (drawer Cancelar)
  | "outline" // bordered tertiary
  | "ghost" // text only (teal)
  | "link" // link colored (Criar regra)
  | "danger"; // red solid (Excluir regra)

type Size = "sm" | "md";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-link/40 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[14px] tracking-[-0.14px] rounded-sm",
  md: "h-10 px-4 text-[16px] tracking-[-0.16px] rounded-lg",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary-surface text-ink-high hover:brightness-95 active:brightness-90",
  inverse: "bg-inverse text-primary-on-color hover:brightness-110 active:brightness-95",
  soft: "bg-primary-surface-low text-primary-link hover:brightness-95 active:brightness-90",
  outline:
    "border border-border-interactive text-primary-70 bg-transparent hover:bg-primary-70/5 active:bg-primary-70/10",
  ghost: "text-primary-70 bg-transparent hover:bg-primary-70/5 active:bg-primary-70/10",
  link: "text-primary-link bg-transparent hover:bg-primary-link/5 active:bg-primary-link/10 font-dm",
  danger: "bg-danger text-white hover:brightness-95 active:brightness-90",
};

export default function Button({
  variant = "ghost",
  size = "md",
  className,
  children,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}: ButtonProps) {
  const fontClass = variant === "link" || variant === "primary" || variant === "soft" || variant === "inverse" || variant === "danger" ? "font-dm" : "font-nunito ss02";
  return (
    <button type={type} className={cn(base, sizes[size], variants[variant], fontClass, className)} {...props}>
      {leftIcon}
      {children && <span className="leading-none">{children}</span>}
      {rightIcon}
    </button>
  );
}
