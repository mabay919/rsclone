import { pause } from './game-pause.js';
import {onOffGame, isOn} from './player-moving.js';

let increaseButton = document.querySelector('.zoom'),
screenField = document.querySelector('.screen_field'),
gameScreen = document.querySelector('.game_screen'),
allField = document.querySelector('.game_zone'),
sizeButtonForFullScreen = document.querySelector(".full_screen_size_button"),
body = document.querySelector("body"),
resultText = document.querySelector(".game_screen_aside-score"),
hiScoreText = document.querySelector(".game_screen_aside-hi-score"),
gameScreenAside = document.querySelector(".game_screen-aside"),
startPauseButton = document.querySelector(".start"),
onOffButton = document.querySelector(".on_off"),
playGameModal = document.querySelector(".play_game"),
modalWind = document.querySelector('.modal'); 

let soundOn = true;

export function switchSound() {
    if (soundOn) {
        soundOn = false;
    } else {
        soundOn = true;
    }
}

export function fullscreenSweatcher() {
    increaseButton.addEventListener('click', () => {
        gameScreen.classList.toggle('full_screen');
        allField.classList.toggle('hide');
        sizeButtonForFullScreen.classList.toggle('hide');
        body.classList.toggle('full_screen_body');
        gameScreenAside.classList.toggle('full_screen_all_text');
        playSoundAllButt();
    });

    sizeButtonForFullScreen.addEventListener('click', () => {
        gameScreen.classList.toggle('full_screen');
        allField.classList.toggle('hide');
        sizeButtonForFullScreen.classList.toggle('hide');
        body.classList.toggle('full_screen_body');
        gameScreenAside.classList.toggle('full_screen_all_text');
        playSoundAllButt();
    });
};

export function addEventsForButtons() {
    startPauseButton.addEventListener('click', () => {
        pause();
        playSoundAllButt();
    });

    onOffButton.addEventListener('click', () => {
        onOffGame();
        gameScreenAside.classList.toggle('hide');
        playSoundAllButt();
    })

    document.querySelector(".sound.button").addEventListener('click', () => {
        document.querySelector(".game_screen_aside-music-icon").classList.toggle('sound_on');
        document.querySelector(".game_screen_aside-music-icon").classList.toggle('sound_off');
        switchSound();
        playSoundAllButt();
    });

    playGameModal.addEventListener('click', () => {
        modalWind.classList.toggle('display_none');
    });
}

export function playSoundAllButt() {
    if (isOn) {
        if (soundOn) {
            const audio = document.querySelector(`audio[data-key="all_butt"]`);
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
        }
    }
}
export function playSoundHelloButt() {
    if (isOn) {
        if (soundOn) {
            const audio = document.querySelector(`audio[data-key="hello"]`);
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
        }
    }
}