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
    Trace your footprint in this world
    <br />
    <!-- <a href="https://github.com/w158rk/track-map"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <a>View Demo</a>
    ·
    <a href="https://github.com/w158rk/track-map/issues">Report Bug</a>
    ·
    <a href="https://github.com/w158rk/track-map/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](#)

This project aims to help you record your footprint in the world in text format.
The input for the screenshot is as the follows:

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

### Built With

* [Vue](https://vuejs.org/)
* [Node.js](https://nodejs.org/)
* [ANTLR 4](https://www.antlr.org/)

<!-- GETTING STARTED -->
## Getting Started

Clone the repository and enjoy.

### Prerequisites

1. install [Node.js](https://nodejs.org/)
2. install [ANTLR 4](https://www.antlr.org/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/w158rk/track-map.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the dist
   ```sh
   npm run build
   ```


<!-- USAGE EXAMPLES -->
## Usage

Run a http server in the `dist/` directory. For example, you can run `npx serve .` in the dist.


<!-- ROADMAP -->
## Roadmap

- ~~ANTLR 4 support~~
- location data for some major cities
- high-quality image export 
- custom color setting 


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License


Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

w158rk - wrk15835@outlook.com

Project Link: [https://github.com/w158rk/track-map](https://github.com/w158rk/track-map)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
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