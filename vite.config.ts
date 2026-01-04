import { defineConfig } from "vite";
import tw from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tw()],
  oxc: {
    jsx: {
      importSource: "@remix-run/component",
      useBuiltIns: true,
      useSpread: true,
      runtime: "automatic",
    },
  },
});
