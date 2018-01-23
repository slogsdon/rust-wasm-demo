import {fetchAndLoadWasm} from './util';
const wasm = require('../target/wasm32-unknown-unknown/release/wasm_demo.min.wasm');
const Module = {};

export default i =>
  new Promise(resolve => {
    if (Module.addTwo) {
      resolve(Module.addTwo(i));
      return;
    }

    fetchAndLoadWasm(wasm).then(({add_two}) => {
      Module.addTwo = add_two;
      resolve(Module.addTwo(i));
    });
  });
