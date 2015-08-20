import _ from 'lodash';
import fetch from 'isomorphic-fetch';

export const REQUEST_PLAYLIST = 'REQUEST_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

function requestPlaylist() {
    return {
        type: REQUEST_PLAYLIST,
        tracks: []
    }
}

function receivePlaylist(json) {
    return {
        type: RECEIVE_PLAYLIST,
        tracks: json.playlist.trackList.track.map((track, index) => { 
            return {
                "id": index,
                "game": track.creator,
                "title": track.title,
                "url": track.location
            }
        })
    }
}

export function fetchPlaylist() {
    return dispatch => {
        dispatch(requestPlaylist());
        return fetch(require("../data/tracklist.json"))
            .then(req => {
                return req.json();
            })
            .then(json => {
                return dispatch(receivePlaylist(json));
            });
    }
}

export function fetchPlaylistIfEmpty() {
    return dispatch(fetchPlaylist());
}