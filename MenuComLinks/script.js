// iddentificar elementos html
const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const verde = document.querySelector('#verde');
const roxo = document.querySelector('#roxo');
const amarelo = document.querySelector('#amarelo')
const box = document.querySelector('.box');

//manipular elementos
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = 'red';
  box.style.color = 'white';
})
verde.addEventListener('click', function() {
  box.style.backgroundColor = 'green';
  box.style.color = 'white';
})
roxo.addEventListener('click', function() {
  box.style.backgroundColor = 'purple';
  box.style.color = 'white';
})
amarelo.addEventListener('click', function() {
  box.style.backgroundColor = 'yellow';
  box.style.color = 'white';
})