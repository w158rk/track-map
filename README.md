<!-- This README is written with the guidance from https://github.com/othneildrew/Best-README-Template -->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/w158rk/track-map">
    <img src="docs/images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">track-map</h3>

  <p align="center">
    记录你的足迹
    <br />
    <!-- <a href="https://github.com/w158rk/track-map"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <a>查看演示</a>
    ·
    <a href="https://github.com/w158rk/track-map/issues">报告Bug</a>
    ·
    <a href="https://github.com/w158rk/track-map/issues">请求功能</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>目录</summary>
  <ol>
    <li>
      <a href="#about-the-project">关于项目</a>
      <ul>
        <li><a href="#built-with">构建依赖</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">入门</a>
      <ul>
        <li><a href="#prerequisites">依赖安装</a></li>
        <li><a href="#installation">安装</a></li>
      </ul>
    </li>
    <li><a href="#usage">使用</a></li>
    <li><a href="#roadmap">路线图</a></li>
    <li><a href="#contributing">贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
    <li><a href="#acknowledgements">致谢</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](#)

以文本方式记录你的足迹，上图的输入文本为：

```
保山 99.1729 25.05753
南昌 115.9000015258789 28.864999771118164
烟台 121.37200164794922 37.40169906616211
沈阳 123.48300170898438 41.639801025390625

保山 南昌
烟台 沈阳
南昌 保山
烟台 沈阳
沈阳 烟台
烟台 沈阳
```

### 构建依赖

* [Vue](https://vuejs.org/)
* [Node.js](https://nodejs.org/)
* [ANTLR 4](https://www.antlr.org/)

<!-- GETTING STARTED -->
## 入门

克隆仓库代码。:smile:

### 依赖安装

1. 安装 [Node.js](https://nodejs.org/)
2. 安装 [ANTLR 4](https://www.antlr.org/)

### 安装

1. 克隆项目代码
   ```sh
   git clone https://github.com/w158rk/track-map.git
   ```
2. 安装npm包
   ```sh
   npm install
   ```
3. 构建项目
   ```sh
   npm run build
   ```


<!-- USAGE EXAMPLES -->
## 使用

构建项目之后在`dist/`目录下运行http服务器，例如，可以使用`npx serve .`运行服务。


<!-- ROADMAP -->
## 路线图

- ~~支持ANTLR 4~~
- 内置主要城市的经纬度信息
- 高清图片导出 
- 用户颜色自定义 

<!-- CONTRIBUTING -->
## 贡献

贡献使开源社区成为一个值得学习、启发和创造的地方。 **非常感谢**你所做的任何贡献。

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. Push 到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull 请求

<!-- LICENSE -->
## 许可证

MIT 许可证, 见`LICENCE`


<!-- CONTACT -->
## 联系方式

- w158rk - wrk15835@outlook.com

- 项目链接: [https://github.com/w158rk/track-map](https://github.com/w158rk/track-map)



<!-- ACKNOWLEDGEMENTS -->
## 致谢
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/w158rk/track-map.svg?style=for-the-badge
[contributors-url]: https://github.com/w158rk/track-map/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/w158rk/track-map.svg?style=for-the-badge
[forks-url]: https://github.com/w158rk/track-map/network/members
[stars-shield]: https://img.shields.io/github/stars/w158rk/track-map.svg?style=for-the-badge
[stars-url]: https://github.com/w158rk/track-map/stargazers
[issues-shield]: https://img.shields.io/github/issues/w158rk/track-map.svg?style=for-the-badge
[issues-url]: https://github.com/w158rk/track-map/issues
[license-shield]: https://img.shields.io/github/license/w158rk/track-map.svg?style=for-the-badge
[license-url]: https://github.com/w158rk/track-map/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ruikai-wang/
[product-screenshot]: docs/images/screenshot.png