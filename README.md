# rust-wasm-demo

> Demo/starter project using Rust and WebAssembly

Featuring:

* [Rust](https://www.rust-lang.org/)
* [Parcel](https://parceljs.org/)

### Reasoning

This project was primarily created to combine some new technologies in order to see what a more complete project could look like and how the individual parts would work together. Specifics:

* Rust: fast and safe code without garbage collection
* WebAssembly: native-like performance in a JavaScript runtime enviroment
* Parcel: frontend asset bundling with minimal configuration

## Requirements

* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/docs/install/) or [npm](https://docs.npmjs.com/getting-started/installing-node)
* [Rust nightly](https://www.rust-lang.org/install.html)
* [`wasm-gc`](https://github.com/alexcrichton/wasm-gc)
* [`cargo-watch`](https://github.com/passcod/cargo-watch) if you want to use the `yarn develop` script

## Getting Started

```
rustup override set nightly
yarn install
yarn develop
```

`yarn develop` will run Parcel in watch mode and leverage `cargo-watch` to rebuild the application on file change.

## Building for Production

```
yarn build
```

The resulting files in `dist` can be uploaded to your preferred web host for consumption.

## Need a Reset?

```
yarn clean
```

## F.A.Q.

<dl>
  <dt>Parcel is too new/unproven and/or is missing <code>$FEATURE</code>. Can it be changed out for <code>$PREFERRED_BUNDLER</code>?</dt>
  <dd>Parcel was specifically chosen for this purpose because it requires minimal configuration to get started. To swap it out, remove Parcel as a dependency (e.g. <code>yarn remove parcel-bundler</code>), add another bundler (e.g. <code>yarn add --dev $PREFERRED_BUNDLER</code>), and update the <code>scripts</code> in <code>package.json</code> to use that bundler.</dd>
  <dt>Rust nightly changes too frequently. What now?</dt>
  <dd>Rust stable does not yet support the `wasm32-unknown-unknown` target for `rustc`, so your only plan of action is to use Rust nightly or wait for Rust stable to support `wasm32-unknown-unknown`.</dd>
</dl>

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
