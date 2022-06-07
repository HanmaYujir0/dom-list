const title = () => {
const h2 = document.createElement('h2');
h2.textContent = 'Работа с DOM';
document.body.prepend(h2);
};
console.log(title());

const dom = () => {
  const a = document.createElement('a');
  a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model';
  a.textContent = 'Dom';
  const main = document.getElementById('main');
  main.append(a)
};
console.log(dom());


const backgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
backgroundColor('pink');

const list = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  const ul = document.getElementById('list');
  ul.append(li);
};
console.log(list('text'));

const del = (id) => {
  const div = document.getElementById(id);
  div.remove();
};
del('copyright')
