import {add_two} from '../src/lib.rs';

const result = add_two(2);
const el = document.createTextNode(result);
const root = document.getElementById('root');

root.childNodes.forEach(e => e.remove());
root.appendChild(el);
