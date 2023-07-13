import nav from "./nav";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import C from './constants'

export default <VdoingThemeConfig>{
  nav: nav,
  sidebarDepth: 2, 
  logo: C.LOGO_PNG, 
  repo: C.REPO, 
  searchMaxSuggestions: 10, 
  lastUpdated: "上次更新", 
  docsDir: "docs", 
  editLinks: false, 
  editLinkText: "编辑", 
  category: true,
  categoryText: '其他',
  tag: true, 
  archive: true, 
  bodyBgImg: C.BODY_IMG,
  contentBgStyle: 6, 
  sidebarOpen: true, 
  sidebar: { mode: "structuring", collapsable: true }, 
  updateBar: {
    showToArticle: true, 
    moreArticle: "/archives", 
  },
  author: {
    name: C.AUTHOR, 
    link: C.BLOG_URL,
  },
  blogger: {
    avatar: C.MAIN_AVATAR,
    name: C.AUTHOR,
    slogan: C.SLOGAN,
  },
  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: C.GITHUB_URL,
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: C.GITEE_URL,
      },
      {
        iconClass: "icon-youjian",
        title: "Mail",
        link: `mailto:${C.MAIL}`,
      },
    ],
  },
  footer: {
    createYear: 2018, 
    copyrightInfo: `
      <a href='${C.BLOG_URL}' target='_blank'>${C.AUTHOR}</a> | <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' rel='external nofollow' target='_blank'>CC BY-NC-SA 4.0</a>
      <br>
      <a href="http://beian.miit.gov.cn/" target="_blank">${C.ICP}</a>
    `, 
  },
};
