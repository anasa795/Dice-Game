'use strict';
const current0score = document.getElementById('current--0');
const current1score = document.getElementById('current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
// console.log(player0)
const player1 = document.querySelector('.player--1');
// dice.classList.add('hidden')
score0.textContent = 0;
score1.textContent = 0;
let current = 0;
let active = 0;
let score = [0, 0];
let play = true;

let switchPlayer = function () {
  current = 0;
  document.getElementById(`current--${active}`).textContent = current;
  active = active === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const reNew = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current = 0;
  active = 0;
  score = [0, 0];
  current = 0;
  play = true;
  dice.classList.remove('hidden');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
};
btnRoll.addEventListener('click', function () {
  if (play) {
    let diceNum = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceNum}.png`;
    current += diceNum;
    // active= active===0?0:1;
    document.getElementById(`current--${active}`).textContent = current;
    if (diceNum === 1) {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (play) {
    score[active] += current;
    // console.log(`current ${current}`)
    // console.log(`score ${score}`)
    document.querySelector(`#score--${active}`).textContent = score[active];
    // console.log(`score ${score}`)
    if (score[active] >= 100) {
      play = false;
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', reNew);
