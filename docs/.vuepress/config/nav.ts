// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "主页", link: "/" },
  {
    text: '分类',
    link: '/categories/',
    items: [
      {text: "PHP", link: "/php/"},
      {text: "前端", link: "/frontend/"},
      {text: "Linux", link: "/linux/"},
    ]
  },
  {text: "算法", link: "/algorithm/"},
  {text: "杂项", link: "/others/"},
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" }
    ]
  }
];
