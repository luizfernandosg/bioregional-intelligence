import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bioregional.refibcn.cat",
  output: "static",
  build: {
    format: "directory",
  },
});
