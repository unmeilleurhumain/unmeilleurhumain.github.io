import { defineUserConfig } from "vuepress";
import theme from "./theme";

import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  title: "Theme Demo",
  description: "A demo for vuepress-theme-hope",

  base: "/",

  theme,
  plugins: [
    searchPlugin({
      // your options
    }),
  ],

});
