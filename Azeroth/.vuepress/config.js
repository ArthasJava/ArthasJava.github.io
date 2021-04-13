module.exports = {
  "title": "Azeroth",
  "description": "For Azeroth",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/MouseClickEffect.js"
    }]
  ],
  "plugins": [
    '@vuepress/last-updated',
    '@vuepress-reco/vuepress-plugin-back-to-top',
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: true,
        modelStyle: {
          position: "fixed",
          right: "90px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "vssueConfig": {
      "platform": 'github-v4',
      "owner": 'Amoycat',
      "repo": 'Amoycat.github.io',
      "clientId": 'f14222855216fc18555c',
      "clientSecret": 'd9adc408ef8c509ccc6e5f849a6be70d22ccef95'
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "工具",
            "link": "/docs/工具/"
          },
          {
            "text": "Spring",
            "link": "/docs/Spring/"
          },
          {
            "text": "Leetcode",
            "link": "/docs/Leetcode/"
          },
          {
            "text": "Java",
            "link": "/docs/Java/"
          },
          {
            "text": "JVM",
            "link": "/docs/JVM/"
          },
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Amoycat",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/工具/": [
        "",
        "IDEA",
        "Maven"
      ],
      "/docs/Spring/": [
        "",
        "Spring MVC"
      ],
      "/docs/Leetcode/": [
        "",
        "二叉树",
        "二分法",
        "动态规划",
        "回溯算法",
        "广度优先",
        "贪心算法",
      ],
      "/docs/JVM/": [
        "",
        "类字节码",
        "类加载子系统",
        "内存结构",
        "JVM 参数",
        "JVM 工具",
        "动态调试技术",
        "Arthas"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Arthas",
    "authorAvatar": "/avatar.gif",
    // "record": "xxxx",
    "startYear": "2021",
    "subSidebar": 'auto'
  },
  "markdown": {
    "lineNumbers": true
  }
}