## Node Package Template

[![npm version](https://img.shields.io/npm/v/style-dictionary.svg?style=flat-square)](https://badge.fury.io/js/style-dictionary) ![license](https://img.shields.io/npm/l/style-dictionary.svg?style=flat-square) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/amzn/style-dictionary/blob/master/CONTRIBUTING.md#submitting-pull-requests) [![Build Status](https://img.shields.io/travis/amzn/style-dictionary.svg?style=flat-square)](https://travis-ci.org/amzn/style-dictionary) [![downloads](https://img.shields.io/npm/dm/style-dictionary.svg?style=flat-square)](https://www.npmjs.com/package/style-dictionary)

<strong>
  <a href="README.md">English</a> |
  <a href="README-zh-cn.md">中文</a> |
  <a href="README-ru-ru.md">Русский</a> |
  <a href="README-th-th.md">ภาษาไทย</a> |
  <a href="README-vi-vn.md">Tiếng Việt</a>
</strong>

<sup><em>(We'd be very greatful for more translation contributions!)</em></sup>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

- **Feature A** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- **Feature B** Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- **Feature C** Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<details open>
<summary><b>Example Usage</b></summary>

<br />

Install `node-package-template` with [npm](http://npmjs.org/)

```sh
npm install node-package-template
```

Import the `nodePackageTemplate` utility.

```ts
import {nodePackageTemplate} from "node-package-template";
// (a: string, b: string) => void
```

The `nodePackageTemplate` export is a function which accepts two strings and does something with them.

```ts
nodePackageTemplate("hello", "world");
nodePackageTemplate("uncle", "snoopdog");
```

We can do another cool thing with this function.

```ts
nodePackageTemplate.cool("hello", "world");
nodePackageTemplate.cool("uncle", "snoopdog");
```

</details>

## Resources

- [Getting Started &rarr;](./media)<br />A walkthrough of setup and core functionality.
- [Guides &rarr;](https://docs.assemblyscript.org)<br />Expanded introduction, conceptual overview and general usage instructions.
- [Tutorials &rarr;](https://docs.assemblyscript.org)<br />Use-case specific examples, which describe the end-to-end, step-by-step.
- [API Reference &rarr;](https://docs.assemblyscript.org)<br />A generated API reference, based on type signatures and in-source comments.
- [Project governance &rarr;](https://github.com/AssemblyScript/meta)<br />Meta information related to the node-package-template project.

## Motivation

> You are now able to write WebAssembly, without learning a new language, and harness all these benefits WebAssembly might offer you. I think that is kind of powerful. [...] It [AssemblyScript] is absolutely usable, and very enjoyable! - Surma, [WebAssembly for Web Developers (Google I/O ’19)](https://youtu.be/njt-Qzw0mVY) (May 8th, 2019)

> AssemblyScript was frictionless. Not only does it allow you to use TypeScript to write WebAssembly, [...] it also produces glue-free WebAssembly modules that are very small with decent performance. – Surma, [Replacing a hot path in your app's JavaScript with WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm) (Feb 16, 2019)

> JavaScript's heyday as the only browser language is over, but most web developers are used to writing JavaScript, and learning a new syntax just to get access to WebAssembly is not (always) ideal. If only there was something in to bridge the gap… – Jani Tarvainen, [TypeScript is the bridge between JavaScript and WebAssembly](https://malloc.fi/typescript-bridge-javascript-webassembly) (Feb 20, 2018)

### License

This library is licensed under [the Apache 2.0 License](LICENSE.md).
