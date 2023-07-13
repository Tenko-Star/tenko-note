// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";
import C from './config/constants'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: C.MAIN_TITLE,
  description: C.MAIN_DESC,
  dest: "./dist",
  shouldPrefetch: () => false,
  head: head,
  theme: "vdoing",
  themeConfig,
  markdown,
  plugins
});
