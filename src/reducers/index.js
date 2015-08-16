import _ from 'lodash';
import { combineReducers } from 'redux';
import { REQUEST_PLAYLIST, RECEIVE_PLAYLIST } from '../actions';

function tracklist(state = {
    tracks: [],
    isFetching: false
}, action) {
    switch (action.type) {
    case REQUEST_PLAYLIST:
        return _.assign({}, state, {
            isFetching: true
        });
    case RECEIVE_PLAYLIST:
        return _.assign({}, state, {
            isFetching: false,
            tracks: action.tracks
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    tracklist
});

export default rootReducer;