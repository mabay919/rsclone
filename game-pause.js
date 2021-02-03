import {fallCells} from './player-moving.js';
let pauseInd = document.querySelector(".paused");

let isPause = false;

export {isPause};

export function pause() {
    if (!isPause){
        isPause = true;
        pauseInd.innerText = 'PAUSED';
    } else {
        isPause = false;
        pauseInd.innerText = '';
    }
    
    console.log(isPause, 'pause');
}

