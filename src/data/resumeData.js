const createImageItems = (category, imagePaths) =>
  imagePaths.map((path, index) => ({
    id: `${category}-${index + 1}`,
    category,
    mediaType: "image",
    thumbnail: path,
    fullImage: path,
  }));

export const heroData = {
  name: "胡璐",
  titles: [],
  bio: "过硬的艺术理论知识，丰富的大模型美学评测经验，长期的标注项目质检经验，深度参与标注规则文档的搭建",
  skills: [
    "Photoshop",
    "Unreal",
    "Unity",
    "3dsmax",
    "Maya",
    "PR",
    "脚本撰写",
    "分镜制作",
    "AutoCAD",
  ],
  email: "632184974@qq.com",
};

const digitalPaintingItems = createImageItems("digital-painting", [
  "works/digital-painting/1.jpg",
  "works/digital-painting/2.jpg",
  "works/digital-painting/3.jpg",
  "works/digital-painting/4.jpg",
  "works/digital-painting/5.jpg",
  "works/digital-painting/6.png",
]);

const videoItems = [
  {
    id: "video-1",
    category: "video",
    mediaType: "video",
    thumbnail: "works/video/1.jpg",
    fullImage: "works/video/1.jpg",
    videoSrc: "works/video/1.mp4",
  },
];

const render3dItems = createImageItems("3d", [
  "works/3d/1.png",
  "works/3d/2.png",
  "works/3d/3.png",
  "works/3d/4.png",
  "works/3d/5.png",
  "works/3d/6.png",
  "works/3d/7.png",
  "works/3d/8.png",
  "works/3d/9.png",
  "works/3d/10.png",
  "works/3d/11.png",
]);

const aigcItems = createImageItems("aigc-image", [
  "works/aigc/1.jpg",
  "works/aigc/2.png",
  "works/aigc/3.png",
  "works/aigc/4.png",
  "works/aigc/5.png",
  "works/aigc/6.png",
  "works/aigc/7.png",
  "works/aigc/8.png",
  "works/aigc/9.png",
  "works/aigc/10.png",
  "works/aigc/11.png",
  "works/aigc/12.jpg",
  "works/aigc/13.png",
  "works/aigc/14.jpg",
]);

export const portfolioItems = [
  ...digitalPaintingItems,
  ...videoItems,
  ...render3dItems,
  ...aigcItems,
];

export const portfolioCategories = [
  { key: "all", label: "全部" },
  { key: "digital-painting", label: "数字绘画" },
  { key: "video", label: "视频作品" },
  { key: "3d", label: "3D渲染" },
  { key: "aigc-image", label: "AIGC图像" },
];

export const educationItems = [
  {
    id: 1,
    label: "本科：2015-09 ~ 2019-06  电子科技大学成都学院  动画",
  },
  {
    id: 2,
    label: "硕士：2019-09 ~ 2022-06  四川美术学院  艺术史",
  },
];

export const workExperienceItems = [
  {
    id: 1,
    summary: "2021-04 ~ 2022-01 上海喜马拉雅科技有限公司 内容运营（实习）",
    details: [
      "对接外部出版社，核对版权信息及书籍的人群定位，确定有声读物的制作方案",
      "发布录制需求，匹配适合的主播，并实时把控有声书的制作质量",
      "以内容包装、标签化处理等方式，优化站内的词条搜索方案",
    ],
  },
  {
    id: 2,
    summary: "2022-08 ~ 2022-11 成都灵绘文化传播有限公司 特效设计师",
    details: [
      "应用unreal引擎，使用材质系统、粒子系统制作三维影视特效",
      "辅助动画成片的剪辑与后期处理工作",
    ],
  },
  {
    id: 3,
    summary: "2023-11 ~ 2024-05 成都坦小克文化传播有限公司 内容运营",
    details: [
      "负责坦小克旗下少儿音频节目《口袋里的超级坦克》的IP运营",
      "主要负责公众号、抖音、小红书的文案撰写，为公众号进行视觉排版、文字排版、制作插图素材",
      "负责宣传视频的脚本撰写、素材制作、剪辑后期、音效配置",
      "多款视频获5万+播放、600+点赞",
    ],
  },
  {
    id: 4,
    summary: "2025-01 ~ 至今 北京智谱华章科技有限公司 大模型标注",
    details: [
      "长期负责艺术类任务的质检工作，任务包括摄影图片、设计图片、世界名画、二次元图片、图片caption、首尾帧图片描述等",
      "参与艺术类规则文档、艺术类质检方案的撰写、修订",
      "负责过一些非艺术类的短周期项目的质检工作，如VLM记账、英语问答、多学科问答构造（图像识别+低学段题目）",
      "有丰富的RLHF通用数据类、百科类、情商类等标注经验",
      "能胜任简单的英语数据的标注",
    ],
  },
];

export const growthData = {
  note: "业余时间，我也在努力提升自己...",
  items: [
    {
      id: 1,
      title: "NanoBanana深度评测与prompt调优实战：",
      content: [
        "输出万字深度分析报告，多维度评测生图效果，针对特定场景输出深度分析评语；",
        "通过多轮迭代优化 Prompt 结构，显著提升了生成质量与可控性。",
      ],
    },
    {
      id: 2,
      title: "Vibe Coding工具应用",
      content: ["本站由CodeX 强力辅助，Vibe Coding的快乐谁懂！"],
    },
    {
      id: 3,
      title: "未来展望：",
      content: [
        "职业目标：期望往产品经理/项目管理方向发展，做一个懂审美、懂产品、懂技术、懂管理的多面手。",
      ],
    },
  ],
};
