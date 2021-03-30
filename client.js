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
