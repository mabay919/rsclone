
import {addControlButtEvent} from './player-moving.js';
import {fullscreenSweatcher, addEventsForButtons} from './button_events.js';
import {cellsGenerator} from './cells_generator.js';
import {fallCells, addKeyboardEvents} from './player-moving.js';
import {addEventsName, getName, currentScreenName} from './greating-modal.js';

cellsGenerator();
// fallCells();
addKeyboardEvents();
fullscreenSweatcher();
addEventsForButtons();
addControlButtEvent();
addEventsName();
getName();
currentScreenName();

