[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://vshymanskyy.github.io/StandWithUkraine)

seppia
=======
[![sources](https://img.shields.io/badge/github-sources-cyan)](https://github.com/pieroproietti/seppia)
[![blog](https://img.shields.io/badge/blog-penguin's%20eggs-cyan)](https://penguins-eggs.net)
[![guide](https://img.shields.io/badge/guide-penguin's%20eggs-cyan)](https://penguins-eggs.net/book/)
[![deb](https://img.shields.io/badge/deb-packages-blue)](https://sourceforge.net/projects/penguins-eggs/files/DEBS)
[![iso](https://img.shields.io/badge/iso-images-cyan)](https://sourceforge.net/projects/penguins-eggs/files/ISOS)

<p>
  Seppia uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://webpack.js.org/">Webpack</a> and <a href="https://www.npmjs.com/package/react-refresh">React Fast Refresh</a>.
</p>

Seppia is automatically installed by ```sudo eggs install --oem seppia --custom it```, and performs its action on the first access of the installed machine.

At the end of user configuration, seppia is uninstalled.

It is possible to have others first access system configurators that can be used with eggs passing the value during OEM system installation: ```sudo eggs install --oem your-first-access-system-configurator```.

 ## Develop
 I'm using [pnpm](https://pnpm.io/) here, so you must install it: ```sudo npn install pnpm -g```.

 * install packages: ```pnpm i```
 * start in dev mode: ```pnpm start```
 * build deb package: ```pnpm package```

# 
# [Our mascote ](https://en.wikipedia.org/wiki/Common_cuttlefish)
**Sepia oficinalis**
![seppia](assets/seppia.png)

## License

MIT © 2023 [Piero Proietti](https://github.com/pieroproietti/LICENZE)
