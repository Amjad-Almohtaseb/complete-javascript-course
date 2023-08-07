'use strict';
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('#check');
const input = document.querySelector('[type=number]');
const message = document.querySelector('.message');
const score = document.querySelector('.label-score span');
const highScore = document.querySelector('.label-highscore span');
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber, 'random number');

/*click event for check button*/
checkButton.addEventListener('click', function (e) {
  if (+score.innerHTML > 0) {
    const inputNumber = +input.value;
    const difference = inputNumber - randomNumber;
    if (difference >= 3) {
      message.innerHTML = 'too high !';
      score.innerHTML -= 1;
    } else if (difference === 1 || difference === 2) {
      message.innerHTML = 'aproximitly high !';
      score.innerHTML -= 1;
    } else if (difference <= -3) {
      message.innerHTML = 'too low !';
      score.innerHTML -= 1;
    } else if (difference === -2 || difference === -1) {
      message.innerHTML = 'aproximitly low !';
      score.innerHTML -= 1;
    } else if (inputNumber === randomNumber) {
      message.innerHTML = `you got it right! the number was ${randomNumber}`;
      document.styleSheets[0].cssRules[3].style['background-color'] = 'green';
      const finalScore = document.querySelector('.label-score span');
      if (+finalScore.innerHTML > +highScore.innerHTML) {
        highScore.innerHTML = finalScore.innerHTML;
      }
    }
    if (+score.innerHTML === 0) {
      document.styleSheets[0].cssRules[3].style['background-color'] = 'red';
      message.innerHTML = 'You Lose The Game 😢😢😢';
    }
  }
});
/*click event for again button*/
againButton.addEventListener('click', function (e) {
  input.value = '';
  score.innerHTML = '20';
  message.innerHTML = 'Start guessing...';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber, 'updated random number');
  document.styleSheets[0].cssRules[3].style['background-color'] = '#222';
});
