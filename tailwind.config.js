/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // RD Station Tangram design tokens
        surface: "#ffffff",
        ink: {
          high: "#212429",
          dark: "#002233",
          low: "#636e7c",
          mid: "#405466",
        },
        border: {
          DEFAULT: "#d5d8db",
          soft: "#d6dbde",
          interactive: "#9ea5ac",
        },
        icon: {
          low: "#858c94",
        },
        primary: {
          link: "#0077b2",
          surface: "#19c1ce",
          "surface-low": "#b2f4ff",
          "on-color": "#00dbff",
          70: "#11a7b6",
        },
        inverse: "#003d5c",
        highlight: "#8800f7",
        danger: "#e52e4d",
        success: "#2dab66",
        neutral20: "#e1e4e8",
        fieldbg: "#f1f3f5",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "system-ui", "sans-serif"],
        dm: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        nav: "0px 4px 12px 0px rgba(0,34,51,0.14)",
        xs: "0px 2px 6px 0px rgba(33,36,41,0.10)",
        drawer: "0px 8px 18px 0px rgba(0,34,51,0.16)",
        lg: "0px 12px 24px 0px rgba(33,36,41,0.20)",
        popover: "0px 4px 16px 0px rgba(0,34,51,0.16)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "toast-in": {
          from: { opacity: "0", transform: "translateX(16px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-in-out",
        "slide-in-right": "slide-in-right 280ms ease-in-out",
        "slide-in-left": "slide-in-left 280ms ease-in-out",
        "scale-in": "scale-in 200ms ease-in-out",
        "toast-in": "toast-in 240ms ease-in-out",
      },
    },
  },
  plugins: [],
};
