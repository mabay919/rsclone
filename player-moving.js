import { isPause } from './game-pause.js';
import {
  cellsGenerator, addActiveFigure, figureObj, canMoveFigure, fixingFigure, rotateFigure, moveFigureDown, clearField,
} from './cells_generator.js';
import {speedLevel, speed} from './score-levels.js';
import {playSoundAllButt, playSoundHelloButt} from './button_events.js';

const gameZone = document.querySelector('.game_zone'),
topButton = document.querySelector('.top'),
leftButton = document.querySelector('.left'),
rightButton = document.querySelector('.right'),
bottomButton = document.querySelector('.bottom'),
rotateButton = document.querySelector('.rotate');


let gameTimer;
let isOn = false;

export { isOn };

export function fallCells() {
        if (!isPause) {
            moveFigureDown();
            addActiveFigure();
            
            speedLevel();
        }
        cellsGenerator();
    gameTimer = setTimeout(fallCells, speed);
}

export function onOffGame() {
    if (isOn) {
        isOn = false;
        clearTimeout(gameTimer);
        clearField();
    } else {
        isOn = true;
        gameTimer = setTimeout(fallCells, speed);
        playSoundHelloButt();
    }
}
function moveLeft() {
    figureObj.x -= 1;
    if (canMoveFigure()) {
      figureObj.x += 1;
    }
    playSoundAllButt();
}
function moveRight() {
    figureObj.x += 1;
    if (canMoveFigure()) {
      figureObj.x -= 1;
    }
    playSoundAllButt();
}

export function addKeyboardEvents() {
  document.addEventListener('keydown', (e) => {
      if (!isPause) {
    if (e.keyCode === 37) {
        moveLeft();
    } else if (e.keyCode === 39) {
        moveRight();
    } else if (e.keyCode === 40) {
      moveFigureDown();
      playSoundAllButt();
    } else if (e.keyCode === 17) {
      rotateFigure();
      playSoundAllButt();
    }
    addActiveFigure();
    cellsGenerator();
}
  });
}

export function addControlButtEvent() {
    leftButton.addEventListener('mousedown', () => {
        moveLeft();
        addActiveFigure();
        cellsGenerator();
    });
    rightButton.addEventListener('mousedown', () => {
        moveRight();
        addActiveFigure();
        cellsGenerator();
    });
    bottomButton.addEventListener('mousedown', () => {
        moveFigureDown();
        addActiveFigure();
        cellsGenerator();
        playSoundAllButt();
    });
    rotateButton.addEventListener('mousedown', () => {
        rotateFigure();
        addActiveFigure();
        cellsGenerator();
        playSoundAllButt();
    })
}
