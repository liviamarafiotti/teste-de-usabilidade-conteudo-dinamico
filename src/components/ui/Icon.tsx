import type { SVGProps } from "react";

export type IconName =
  | "arrow-left"
  | "chevron-right"
  | "chevron-down"
  | "chevron-up"
  | "caret-down"
  | "code-merge"
  | "close"
  | "plus"
  | "pen"
  | "trash"
  | "info"
  | "monitor"
  | "smartphone"
  | "check"
  | "folder";

type IconProps = {
  name: IconName;
  size?: number;
} & Omit<SVGProps<SVGSVGElement>, "name">;

/**
 * Tangram-style icon set rendered inline so it can be recolored via `currentColor`.
 * Paths follow a 24x24 viewBox.
 */
export default function Icon({ name, size = 24, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
  };

  switch (name) {
    case "arrow-left":
      return (
        <svg {...common}>
          <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-up":
      return (
        <svg {...common}>
          <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "caret-down":
      return (
        <svg {...common}>
          <path d="M6 9.5L12 15.5L18 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code-merge":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="9" r="2.4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 8.4V15.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 9C6 13 9 11.4 15.6 9.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M14.5 5.5L18.5 9.5M4 20L4.7 16.5L15 6.2C15.6 5.6 16.5 5.6 17.1 6.2L17.8 6.9C18.4 7.5 18.4 8.4 17.8 9L7.5 19.3L4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M4 7H20M10 4H14M9 7V18M15 7V18M6 7L7 19C7 19.6 7.4 20 8 20H16C16.6 20 17 19.6 17 19L18 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" fill="currentColor" />
          <path d="M12 11V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="8" r="1.2" fill="white" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <path d="M9 20H15M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M11 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12.5L10 17.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M3 7C3 6 3.7 5.2 4.7 5.2H9L11 7.2H19.3C20.3 7.2 21 8 21 9V17C21 18 20.3 18.8 19.3 18.8H4.7C3.7 18.8 3 18 3 17V7Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
