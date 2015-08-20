import _ from 'lodash';
import { combineReducers } from 'redux';
import { REQUEST_PLAYLIST, RECEIVE_PLAYLIST } from '../actions';

import tracklist from "./TrackList";

const rootReducer = combineReducers({
    tracklist
});

export default rootReducer;