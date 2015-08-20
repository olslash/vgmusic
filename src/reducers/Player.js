import _ from 'lodash';

import {
    NEXT_SONG,
    PREV_SONG,
    PAUSE_SONG,
    PLAY_SONG,
    STOP_SONG,
    PLAYER_STATUS
} from "../actions/Player";

export default function player(state = {
    currentTrack: null,
    isRandom: false,
    status: PLAYER_STATUS.STOPPED

}, action {
    switch (action.type) {
    case NEXT_SONG:
        
    case PREV_SONG:
        return;
    case PAUSE_SONG:
        return;
    case PLAY_SONG:
        return;
    case STOP_SONG:
        return;
    case PLAYER_STATUS:
        return;
    }  
})