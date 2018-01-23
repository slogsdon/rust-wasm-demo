import addTwo from './add-two';

addTwo(2).then(result => {
  const el = document.createTextNode(result);
  const root = document.getElementById('root');

  root.childNodes.forEach(e => e.remove());
  root.appendChild(el);
});
