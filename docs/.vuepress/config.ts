import { defineUserConfig } from "vuepress";
import theme from "./theme";

const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

export default defineUserConfig({
  lang: "en-US",
  title: "Un Meilleur Humain",
  description: "Free IT Courses",

  base: "/",

  theme,

  plugins: [
    docsearchPlugin({
      // your options
    }),
  ],

});