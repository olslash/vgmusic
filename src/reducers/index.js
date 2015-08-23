import _ from 'lodash';
import { combineReducers } from 'redux';
import { REQUEST_PLAYLIST, RECEIVE_PLAYLIST } from '../actions';

import tracklist from "./TrackList";
import player from "./Player";

const rootReducer = combineReducers({
    tracklist,
    player
});

export default rootReducer;
