# My Loon Plugins

## 我的 Loon 去广告插件集合

![GitHub stars](https://img.shields.io/github/stars/BruceWae/my-loon-plugins?color=ffd700&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/BruceWae/my-loon-plugins?color=60c5ba&style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/BruceWae/my-loon-plugins?color=1E90FF&style=for-the-badge)

---

## ⚠️ 免责声明

> **本项目中的任何内容仅供学习交流使用，请勿用于商业用途。**
>
> **禁止在中国大陆的任何平台传播或售卖本项目内容**（包括但不限于：链接分享、发帖宣传、二次售卖等）。
>
> Please do not disseminate or sell the content of this project on any platform in mainland China.
>
> 使用本项目所造成的一切后果，由使用者自行承担。

---

## 📦 插件列表

| 插件 | 描述 | 更新日期 |
|------|------|----------|
| [百度网盘去广告 (含游戏中心)](Plugin/BaiduNetDisk_remove_ads_custom.lpx) | 屏蔽开屏、弹窗、游戏中心模块、我的页面推广 | 2026-02-07 |
| [KFC 肯德基去广告](Plugin/KFC_AdBlock.plugin) | 屏蔽开屏广告、弹窗广告、首页广告 | 2026-02-07 |
| [麦当劳去广告](Plugin/McDonalds_AdBlock.plugin) | 屏蔽开屏广告、弹窗广告、首页广告 | 2026-02-07 |
| [天翼生活去广告](Plugin/TianyiLife_remove_ads.plugin) | 移除开屏广告、启动动画和首页弹窗 | 2026-02-06 |
| [中国移动江苏去广告](Plugin/JiangsuMobile_remove_ads.plugin) | 移除弹窗广告、Toast提示和各类推广 | 2026-02-07 |
| [雅迪智行去广告](Plugin/Yadea_AdBlock.plugin) | 屏蔽弹窗广告与运营位推广（另附[小火箭版](Plugin/Yadea_AdBlock.sgmodule)） | 2026-11-27 |
| [广告合集精简版](Plugin/AdsCleanup_Slim.sgmodule) | 从「广告拦截&净化合集」抽取的纯声明式规则（小火箭）。已剔除 580 条远程脚本，以及全部银行/支付/微信/支付宝与交易类域名 | 2026-11-27 |

---

## 🚀 使用方法

### 方式一：一键导入（推荐）

复制以下链接在 Safari 中打开：

**百度网盘 (强力去广告 + 屏蔽游戏中心)：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/BaiduNetDisk_remove_ads_custom.lpx
```

**KFC 肯德基：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/KFC_AdBlock.plugin
```

**麦当劳：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/McDonalds_AdBlock.plugin
```

**天翼生活：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/TianyiLife_remove_ads.plugin
```

**中国移动江苏：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/JiangsuMobile_remove_ads.plugin
```

**雅迪智行：**
```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/Yadea_AdBlock.plugin
```

**雅迪智行（小火箭版）：** 直接在 Shadowrocket 中打开
```
https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/Yadea_AdBlock.sgmodule
```

**广告合集精简版（小火箭版）：** 直接在 Shadowrocket 中打开
```
https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/AdsCleanup_Slim.sgmodule
```

### 方式二：手动添加

在 Loon 中：配置 → 插件 → 右上角 `+` → 添加插件 URL

---

## 📁 目录结构

```
├── Plugin/          # 插件文件 (.plugin / .lpx)
│   ├── BaiduNetDisk_remove_ads_custom.lpx
│   ├── baidu_netdisk_clean.js
├── Script/          # 脚本文件 (.js)
└── README.md
```

---

## ⚙️ 注意事项

- 需要在 Loon 中正确配置并信任 MitM 证书
- 部分插件需要开启 HTTPS 解密才能生效
- 如遇问题请提 Issue

### AdsCleanup_Slim 的排除范围

为安全起见，本模块**硬性不含**以下域名（写死在生成脚本里，不会回归）：

- **脚本**：全部 580 条 `[Script]` 远程脚本已删除，文件内无任何 `script-path`
- **银行/支付**：所有手机银行、银联/云闪付、拉卡拉等支付机构、支付宝（含 `ynuf.alipay.com` 风控域）
- **微信**：`mp.weixin.qq.com`、`security.wechat.com`、`weixin110.qq.com`、财付通
- **交易类**：淘宝/天猫/京东/拼多多/美团/大众点评/饿了么/闲鱼/携程/同程/滴滴/山姆/盒马

保留的是纯声明式的 `[Rule]` / `[URL Rewrite]` / `[Body Rewrite]` / `[Map Local]` / `[Header Rewrite]`，不会外发任何数据。

---

## 🙏 致谢

感谢所有开源项目的贡献者们。
