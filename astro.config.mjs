import { defineConfig } from "astro/config";

// Until the custom domain (bioregional.refibcn.cat) is wired via CNAME, GitHub
// Pages serves at luizfernandosg.github.io/bioregional-intelligence/ — so we
// publish under that base. When the CNAME lands, drop `base` and bump `site`.
export default defineConfig({
  site: "https://luizfernandosg.github.io",
  base: "/bioregional-intelligence",
  output: "static",
  build: {
    format: "directory",
  },
});
