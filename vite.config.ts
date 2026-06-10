import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo>/. Use that base for production
// builds, and "/" during local development.
const repoBase = "/teste-de-usabilidade-conteudo-dinamico/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? repoBase : "/",
  plugins: [react()],
}));
