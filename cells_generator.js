import { pause } from './game-pause.js';
import { isOn } from './player-moving.js';
import { figures } from './figures.js';
import { playSoundAllButt, playSoundHelloButt } from './button_events.js';
import { saveScore, getScoreName, getScore } from './score-levels.js';

const gameField = document.querySelector('.game_screen-main');
const scoreInd = document.querySelector('.your_result');
const bestScore = document.querySelector('.best_score');
const bestScoreName = document.querySelector('.best_score_name');
const pauseInd = document.querySelector('.paused');

let score = 0;

const playfield = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const figureObj = {
  x: 4,
  y: 0,
  shape: createNewFigure(),
};

export function moveFigureDown() {
  figureObj.y += 1;
  if (canMoveFigure()) {
    figureObj.y -= 1;
    fixingFigure();
    removingArrString();
    figureObj.shape = createNewFigure();
    figureObj.x = 4;
    figureObj.y = 0;
    playSoundAllButt();
    if (canMoveFigure()) {
      console.log('game over');
      pause();
      pauseInd.innerText = 'Game Over';
      playSoundHelloButt();
      saveScore();
    }
  }
}

export function rotateFigure() {
  const prevFigureState = figureObj.shape;
  figureObj.shape = figureObj.shape[0].map((val, ind) => figureObj.shape.map((row) => row[ind]).reverse());

  if (canMoveFigure()) {
    figureObj.shape = prevFigureState;
  }
  playSoundAllButt();
}

export function clearField() {
  gameField.innerHTML = '';
}

export function cellsGenerator() {
    let randNum = Math.floor(Math.random() * 6);
  if (isOn) {
    let gameHTML = '';
    for (let i = 0; i < playfield.length; i += 1) {
      for (let y = 0; y < playfield[y].length; y += 1) {
        if (playfield[i][y] === 1) {
          gameHTML += `<div class="game_cell moving_cell color_${randNum}"></div>`;
        } else if (playfield[i][y] === 2) {
          gameHTML += '<div class="game_cell fixed_cell"></div>';
        } else {
          gameHTML += '<div class="game_cell"></div>';
        }
      }
    }
    gameField.innerHTML = gameHTML;
  }
  bestScoreName.innerHTML = getScoreName();
  bestScore.innerText = getScore();
}

export function removinPrevFigure() {
  for (let i = 0; i < playfield.length; i += 1) {
    for (let y = 0; y < playfield[y].length; y += 1) {
      if (playfield[i][y] === 1) {
        playfield[i][y] = 0;
      }
    }
  }
}

export function addActiveFigure() {
  removinPrevFigure();
  for (let y = 0; y < figureObj.shape.length; y += 1) {
    for (let x = 0; x < figureObj.shape[y].length; x += 1) {
      if (figureObj.shape[y][x]) {
        playfield[figureObj.y + y][figureObj.x + x] = figureObj.shape[y][x];
      }
    }
  }
}

export function canMoveFigure() {
  for (let y = 0; y < figureObj.shape.length; y += 1) {
    for (let x = 0; x < figureObj.shape[y].length; x += 1) {
      if (
        figureObj.shape[y][x]
        && (playfield[figureObj.y + y] === undefined
            || playfield[figureObj.y + y][figureObj.x + x] === undefined
            || playfield[figureObj.y + y][figureObj.x + x] === 2)
      ) {
        return true;
      }
    }
  }
  return false;
}

export function removingArrString() {
  let canRemove = true;
  for (let i = 0; i < playfield.length; i += 1) {
    for (let y = 0; y < playfield[y].length; y += 1) {
      if (playfield[i][y] !== 2) {
        canRemove = false;
        break;
      }
    }
    if (canRemove) {
      console.log('full line');
      playfield.splice(i, 1);
      playfield.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      score += 1;
      scoreInd.innerText = score;
      saveScore();
      bestScoreName.innerHTML = getScoreName();
      bestScore.innerText = getScore();
    }
    canRemove = true;
  }
}

export function createNewFigure() {
  const figure = 'IOLJTSZ';
  const randNumber = Math.floor(Math.random() * 7);
  return figures[figure[randNumber]];
}

export function fixingFigure() {
  for (let i = 0; i < playfield.length; i += 1) {
    for (let y = 0; y < playfield[y].length; y += 1) {
      if (playfield[i][y] === 1) {
        playfield[i][y] = 2;
      }
    }
  }
}

export { figureObj, score };
