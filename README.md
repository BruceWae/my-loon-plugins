# 去广告规则集（Loon + 小火箭）

自用的去广告规则：Loon `*.plugin` / `*.lpx` + 小火箭 `*.sgmodule`。

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

| 插件 | 平台 | 说明 |
|------|:----:|------|
| [广告拦截&净化合集（精简版）](Plugin/AdsCleanup_Slim.sgmodule) | 小火箭 | 从第三方「广告拦截&净化合集」抽取的**纯声明式**规则，580 条远程脚本已全部剔除。银行/支付/支付宝/微信域名全部排除 |
| [雅迪智行去广告](Plugin/Yadea_AdBlock.sgmodule) | 小火箭 | 屏蔽弹窗与运营位推广；不碰车控/开锁/定位/订单/支付 |
| [雅迪智行去广告](Plugin/Yadea_AdBlock.plugin) | Loon | 同上，Loon 语法 |
| [百度网盘去广告（含游戏中心）](Plugin/BaiduNetDisk_remove_ads_custom.lpx) | Loon | 屏蔽开屏、弹窗、游戏中心模块、我的页面推广 |
| [KFC 肯德基去广告](Plugin/KFC_AdBlock.plugin) | Loon | 屏蔽开屏广告、弹窗广告、首页广告 |
| [麦当劳去广告](Plugin/McDonalds_AdBlock.plugin) | Loon | 屏蔽开屏广告、弹窗广告、首页广告 |
| [天翼生活去广告](Plugin/TianyiLife_remove_ads.plugin) | Loon | 移除开屏广告、启动动画和首页弹窗 |
| [中国移动江苏去广告](Plugin/JiangsuMobile_remove_ads.plugin) | Loon | 移除弹窗广告、Toast 提示和各类推广 |

---

## 🚀 使用方法

### Loon

复制下面的链接在 Safari 中打开，会自动唤起 Loon 导入：

```
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/Yadea_AdBlock.plugin
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/BaiduNetDisk_remove_ads_custom.lpx
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/KFC_AdBlock.plugin
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/McDonalds_AdBlock.plugin
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/TianyiLife_remove_ads.plugin
loon://import?plugin=https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/JiangsuMobile_remove_ads.plugin
```

或手动：**配置 → 插件 → 右上角 `+` → 填入 raw 地址**

### 小火箭（Shadowrocket）

在 Safari 打开 raw 地址即可弹出「添加模块」，或：**配置 → 模块 → 添加**，填入下面任一地址：

```
https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/AdsCleanup_Slim.sgmodule
https://raw.githubusercontent.com/BruceWae/my-loon-plugins/main/Plugin/Yadea_AdBlock.sgmodule
```

---

## 🧹 关于「广告拦截&净化合集（精简版）」

原模块 912 KB，`[Script]` 里挂着 **580 条远程脚本**（194 个第三方地址，含 `jsjiami.com.v7` 混淆代码）。脚本在运行时才从网络拉取，作者什么时候改、改成什么，你都无法预判。这个版本把它拆成两半：

| | 原模块 | 精简版 |
|---|----:|----:|
| `[Script]` 远程脚本 | 580 | **0** |
| `script-path` | 580 | **0** |
| `[Rule]` | 2894 | 2879 |
| `[URL Rewrite]` | 2111 | 1999 |
| `[Body Rewrite]` | 1902 | 1862 |
| `[Map Local]` | 1208 | 1158 |
| `[Header Rewrite]` | 2 | 2 |
| MITM 主机 | 1679 | 1594 |

剩下的全是声明式的 `[Rule]` / `[URL Rewrite]` / `[Body Rewrite]` / `[Map Local]` / `[Header Rewrite]`，规则文本固定，运行时不可能被替换，也不会外发任何数据。

**排除掉的东西（写死在生成脚本里）：**

- **脚本** — 全部 580 条远程脚本，一个不留
- **支付宝** — 含 `ynuf.alipay.com` 这条风控域的 `REJECT`（拦掉会让支付宝看到的风控信号缺失，触发滑块/限流）
- **微信** — `mp.weixin.qq.com`、`security.wechat.com`、`weixin110.qq.com`、财付通/微信支付
- **银行** — 所有手机银行（工行/建行/中行/交行/中信/浦发/邮储/光大/招商/北京银行/吉林银行/常熟农商…）
- **支付机构** — 银联 `wallet.95516.com`、云闪付、拉卡拉、合利宝、银盛、联动优势等
- **钱包页/下单详情页** — 这类页面一旦被改写会直接影响看订单，一律不碰

**保留的东西：** 淘宝/天猫/京东/拼多多/美团/大众点评/饿了么/闲鱼/携程/同程/滴滴/高德/山姆/盒马等交易类 App 的广告规则**全部保留**，只是其中涉及支付、钱包、订单详情的接口被单独摘掉了。

---

## 📁 目录结构

```
├── Plugin/          # 插件 / 模块
│   ├── AdsCleanup_Slim.sgmodule      # 小火箭
│   ├── Yadea_AdBlock.sgmodule        # 小火箭
│   ├── *.plugin / *.lpx              # Loon
│   └── baidu_netdisk_clean.js
├── Script/          # 脚本
└── README.md
```

---

## ⚙️ 注意事项

- 需要在 Loon / 小火箭中正确配置并信任 MitM 证书，模块才会生效
- `AdsCleanup_Slim` 的 MITM 主机有 1594 个，导入后解密面很大；如果只在少数 App 上要效果，建议自己裁掉用不到的域名
- 部分规则依赖 App 当前版本的接口结构，App 更新后可能失效，属正常情况

---

## 🙏 致谢

感谢所有开源项目的贡献者们。
