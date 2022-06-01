
// https://stackoverflow.com/questions/57172350/vuepress-theme-inheritance-setup

import { DefaultThemeOptions, Theme } from "vuepress";
import { hopeTheme, HopeThemeOptions } from "vuepress-theme-hope";

const { path } = require('@vuepress/utils')

export const localTheme = (Option: HopeThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: hopeTheme(Option),
    layouts: {
      Library: path.resolve(__dirname, './layouts/Library.vue'),
    },
  }
}