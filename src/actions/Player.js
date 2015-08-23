import _ from 'lodash';
import fetch from 'isomorphic-fetch';

export const PAUSE_SONG = "PAUSE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const STOP_SONG = "STOP_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const PREV_SONG = "PREV_SONG";
export const TOGGLE_RANDOM = "TOGGLE_RANDOM";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const PLAYER_STATUS = {
    STOPPED: 'STOPPED',
    PAUSED: 'PAUSED',
    PLAYING: 'PLAYING'
};

export function playSong() {
    return {
        type: PLAY_SONG
    }
}

export function pauseSong() {
    return {
        type: PAUSE_SONG
    }
}
