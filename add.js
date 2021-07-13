import sum from './test.js';
import './src/style.css';
import nyancat from './src/nyancat.jpg';
console.log(sum(1,4));
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
    <img src="${nyancat}" />
  `
})