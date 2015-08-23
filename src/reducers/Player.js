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

}, action) {
    switch (action.type) {
    case NEXT_SONG:
        return;
    case PREV_SONG:
        return;
    case PAUSE_SONG:
        return _.assign({}, state, {
            status: PLAYER_STATUS.PAUSED
        });
    case PLAY_SONG:
        return _.assign({}, state, {
            status: PLAYER_STATUS.PLAYING
        });
    case STOP_SONG:
        return _.assign({}, state, {
            status: PLAYER_STATUS.STOPPED
        });
    case PLAYER_STATUS:
        return;
    default:
        return state
    }
}
