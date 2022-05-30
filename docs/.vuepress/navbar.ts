import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "Guide", icon: "creative", link: "/guide/" },
  {
    text: "Theme Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
