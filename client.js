const $smallCount = document.querySelector('#smallCount');
const $bigCount = document.querySelector('#bigCount');
const $weight = document.querySelector('#weight');
const $kotek = document.getElementById('kotek');

$smallCount.addEventListener('change', (event) => {
  const smallValue = parseInt(event.target.value, 10) || 0;
  const bigValue = parseInt($bigCount.value, 10) || 0;
  const weight = smallValue * 0.8 + bigValue * 2.4;
  $weight.innerText = (weight + 1.8).toFixed(1);
});

$bigCount.addEventListener('change', (event) => {
  const bigValue = parseInt(event.target.value, 10) || 0;
  const smallValue = parseInt($smallCount.value, 10) || 0;
  const weight = smallValue * 0.8 + bigValue * 2.4;
  $weight.innerText = (weight + 1.8).toFixed(1);
});

$kotek.addEventListener('click', (event) => {
  alert('Misiu Cię kocha! ;*');
});

document.querySelector('#small0').addEventListener('click', (event) => {
  $smallCount.value = 0;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#small1').addEventListener('click', (event) => {
  $smallCount.value = 1;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#small2').addEventListener('click', (event) => {
  $smallCount.value = 2;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#small3').addEventListener('click', (event) => {
  $smallCount.value = 3;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#small4').addEventListener('click', (event) => {
  $smallCount.value = 4;
  $smallCount.dispatchEvent(new Event('change'));
});

document.querySelector('#big0').addEventListener('click', (event) => {
  $bigCount.value = 0;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big1').addEventListener('click', (event) => {
  $bigCount.value = 1;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big2').addEventListener('click', (event) => {
  $bigCount.value = 2;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big3').addEventListener('click', (event) => {
  $bigCount.value = 3;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big4').addEventListener('click', (event) => {
  $bigCount.value = 4;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big5').addEventListener('click', (event) => {
  $bigCount.value = 5;
  $smallCount.dispatchEvent(new Event('change'));
});
document.querySelector('#big6').addEventListener('click', (event) => {
  $bigCount.value = 6;
  $smallCount.dispatchEvent(new Event('change'));
});
