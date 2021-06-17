# Node Package Template

[![npm version](https://img.shields.io/npm/v/style-dictionary.svg?style=flat-square)](https://badge.fury.io/js/style-dictionary) ![license](https://img.shields.io/npm/l/style-dictionary.svg?style=flat-square) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/amzn/style-dictionary/blob/master/CONTRIBUTING.md#submitting-pull-requests) [![downloads](https://img.shields.io/npm/dm/style-dictionary.svg?style=flat-square)](https://www.npmjs.com/package/style-dictionary)

The **`package-name` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.** Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

## Installation

**Node** users can install with [npm](https://www.npmjs.com/package/node-package-template).

```sh
npm install node-package-template
```

> `node-package-template` is packaged in both ESModule & CommonJS formats, with accompanying type definitions.

**Deno** users can import from either the [deno.land/x](https://deno.land/x) cache or the [nest.land](https://nest.land) registry (an [Arweave](https://www.arweave.org/)-backed JavaScript registry).

```ts
import * as nodePackageTemplate from "https://deno.land/x/node-package-template@<x.x.x>/mod.ts";
```

> Specify the latest version in the place of `<x.x.x>`.

... or via an import map:

`import_map.json`

```json
{
  "imports": {
    "node-package-template": "https://deno.land/x/node-package-template@<x.x.x>/mod.ts"
  }
}
```

## Resources

<!-- TODO: YouTube series -->

- [Guide &rarr;](docs/guide.md)<br />Expanded introduction, conceptual overview and general usage instructions.
- [Contributing &rarr;](CONTRIBUTING.md)<br />Details about contributing to the Solly and its community.
- [API Reference &rarr;](docs/reference.md)<br />A generated API reference, based on type signatures and in-source comments.
- [Governance &rarr;](GOVERNANCE.md)<br />Meta information related to this package, such as governance and ideological boundaries.

## Examples

### First Example

```ts
import {Chainable} from "node-package-template";

const A = Chainable(
  class {
    static readonly a = "Hello";
  },
);

A.a; // type `"hello"`
new A(); // instance of `A`, which is extended from the anonymous class

const B = A.next({
  b: "chainables",
} as const);
```

### Second Example

```ts
B.a; // type `"hello"`
B.b; // type `"chainables"`
new B(); // instance of `B` (subtype of `A`)

const C = B.next({
  staticsToString() {
    // we can reference inherited statics with `this`
    return `${this.a} ${this.b}!`;
  },
});

C.staticsToString(); // `Hello chainables!`
new C(); // instance of `C` (subtype of `B`)
```

## Motivation

> You are now able to write WebAssembly, without learning a new language, and harness all these benefits WebAssembly might offer you. I think that is kind of powerful. [...] It [AssemblyScript] is absolutely usable, and very enjoyable! - Surma, [WebAssembly for Web Developers (Google I/O ’19)](https://youtu.be/njt-Qzw0mVY) (May 8th, 2019)

> AssemblyScript was frictionless. Not only does it allow you to use TypeScript to write WebAssembly, [...] it also produces glue-free WebAssembly modules that are very small with decent performance. – Surma, [Replacing a hot path in your app's JavaScript with WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm) (Feb 16, 2019)

> JavaScript's heyday as the only browser language is over, but most web developers are used to writing JavaScript, and learning a new syntax just to get access to WebAssembly is not (always) ideal. If only there was something in to bridge the gap… – Jani Tarvainen, [TypeScript is the bridge between JavaScript and WebAssembly](https://malloc.fi/typescript-bridge-javascript-webassembly) (Feb 20, 2018)

## Performance (TODO)

While **Solly is the only library to offer streaming parsing** (a fundamentally-different use case), its synchronous parsing is [benchmarked](./bench/readme.txt) relative to alternatives as follows:

|                                                                                         | ops/sec          | samples run |
| :-------------------------------------------------------------------------------------- | :--------------- | :---------- |
| **Solly**                                                                               | **3000 ops/sec** | **6000**    |
| [solidity-parser/parser](https://github.com/solidity-parser/parser)                     | 900 ops/sec      | 1920        |
| [ConsenSys/python-solidity-parser](https://github.com/ConsenSys/python-solidity-parser) | 600 ops/sec      | 3048        |
| [vega-bond/solidity-parser-antlr](vega-bond/solidity-parser-antlr)                      | 300 ops/sec      | 4224        |
| [sambacha/solidity-pegjs-parser](https://github.com/sambacha/solidity-pegjs-parser)     | 150 ops/sec      | 896         |
| [sambacha/solidity-ts-parser](https://github.com/sambacha/solidity-ts-parser)           | 300 ops/sec      | 613         |

## License

This library is licensed under [the Apache 2.0 License](LICENSE).
