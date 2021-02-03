import { score } from './cells_generator.js';
import { addEventsName, getName } from './greating-modal.js';

const levelInd = document.querySelector('.your_level');
const currentPlayScreenName = document.querySelector('.current_player_name');
const scoreInd = document.querySelector('.your_result');

let level = 1;
let speed = 1000;

export function speedLevel() {
  if (score <= 10) {
    level = 1;
    speed = 900;
  } else if (score <= 20) {
    level = 2;
    speed = 800;
  } else if (score <= 30) {
    level = 3;
    speed = 700;
  } else if (score <= 40) {
    level = 4;
    speed = 600;
  } else if (score <= 50) {
    level = 5;
    speed = 500;
  } else if (score <= 60) {
    level = 6;
    speed = 400;
  } else if (score <= 70) {
    level = 7;
    speed = 300;
  } else if (score <= 80) {
    level = 8;
    speed = 200;
  } else if (score <= 90) {
    level = 9;
    speed = 100;
  }
  console.log(level, 'level');
  console.log(score, 'score');
  console.log(speed, 'speed');
  levelInd.innerText = level;
}

export { speed };

export function saveScore() {
  const bestPlayerName = currentPlayScreenName.innerText;
  const bestPlayerScore = scoreInd.innerText;
  if (!localStorage.getItem('bestPlayerName')) {
    localStorage.setItem('bestPlayerName', bestPlayerName);
    localStorage.setItem('bestPlayerScore', bestPlayerScore);
  } else if (Number(localStorage.getItem('bestPlayerScore')) < Number(scoreInd.innerText)) {
    localStorage.clear();
    localStorage.setItem('bestPlayerName', bestPlayerName);
    localStorage.setItem('bestPlayerScore', bestPlayerScore);
  }
}

export function getScoreName() {
  if (!localStorage.getItem('bestPlayerName')) {
    return '';
  }
  return localStorage.getItem('bestPlayerName');
}

export function getScore() {
    if (!localStorage.getItem('bestPlayerScore')) {
        return '';
      }
      return localStorage.getItem('bestPlayerScore');
}
