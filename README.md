## Node Package Template

**`package-name` enables... something incredibly cool.**

---

[![npm version](https://img.shields.io/npm/v/style-dictionary.svg?style=flat-square)](https://badge.fury.io/js/style-dictionary) ![license](https://img.shields.io/npm/l/style-dictionary.svg?style=flat-square) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/amzn/style-dictionary/blob/master/CONTRIBUTING.md#submitting-pull-requests) [![downloads](https://img.shields.io/npm/dm/style-dictionary.svg?style=flat-square)](https://www.npmjs.com/package/style-dictionary)

## Installation

**Deno** users can reference the GitHub source directly (make sure to specify the version).

`import_map.json`

```json
{
  "imports": {
    "constructor-chain": "https://github.com/harrysolovay/constructor-chain/blob/v[x.x.x]/src/index.ts"
  }
}
```

**Node** users can install with [npm](https://www.npmjs.com/package/constructor-chain).

```sh
npm install constructor-chain
```

> `constructor-chain` is packaged in both ESM & CJS formats, alongside its type definitions.

### Basic Usage

```ts
import {Chainable} from "constructor-chain";

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

## Resources

- [Guide &rarr;](docs/guide.md)<br />Expanded introduction, conceptual overview and general usage instructions.
- [API Reference &rarr;](docs/reference.md)<br />A generated API reference, based on type signatures and in-source comments.
- [Project Governance &rarr;](docs/governance.md)<br />Meta information related to the package-name project.

## Motivation

> You are now able to write WebAssembly, without learning a new language, and harness all these benefits WebAssembly might offer you. I think that is kind of powerful. [...] It [AssemblyScript] is absolutely usable, and very enjoyable! - Surma, [WebAssembly for Web Developers (Google I/O ’19)](https://youtu.be/njt-Qzw0mVY) (May 8th, 2019)

> AssemblyScript was frictionless. Not only does it allow you to use TypeScript to write WebAssembly, [...] it also produces glue-free WebAssembly modules that are very small with decent performance. – Surma, [Replacing a hot path in your app's JavaScript with WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm) (Feb 16, 2019)

> JavaScript's heyday as the only browser language is over, but most web developers are used to writing JavaScript, and learning a new syntax just to get access to WebAssembly is not (always) ideal. If only there was something in to bridge the gap… – Jani Tarvainen, [TypeScript is the bridge between JavaScript and WebAssembly](https://malloc.fi/typescript-bridge-javascript-webassembly) (Feb 20, 2018)

### License

This library is licensed under [the Apache 2.0 License](LICENSE).
