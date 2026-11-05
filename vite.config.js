import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Tailwind-Landing-Page/",

  plugins: [tailwindcss()],
});
