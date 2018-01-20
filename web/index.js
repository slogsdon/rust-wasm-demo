import {fetchAndLoadWasm} from './util';
const wasm = require('../target/wasm32-unknown-unknown/release/wasm_demo.min.wasm');

fetchAndLoadWasm(wasm).then(({add_two}) => {
  const el = document.createTextNode(add_two(2));
  const root = document.getElementById('root');

  root.childNodes.forEach(e => e.remove());
  root.appendChild(el);
});
