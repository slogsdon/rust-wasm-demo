export const fetchAndLoadWasm = loc =>
  fetch(loc)
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => results.instance.exports);
