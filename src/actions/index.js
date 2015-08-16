import _ from 'lodash';
import fetch from 'isomorphic-fetch';

export const REQUEST_PLAYLIST = 'REQUEST_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const SELECT_TRACK = 'SELECT_TRACK';
export const SELECT_RANDOM = 'SELECT_RANDOM';

export function selectTrack(tracks, id) {
    return {
        type: SELECT_TRACK,
        selected_track: id,
        tracks
    }
}

export function selectRandomTrack(tracks) {
    return {
        type: SELECT_RANDOM,
        tracks
    }
}

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

function fetchPlaylist() {
    return dispatch => {
        dispatch(requestPlaylist());
        return fetch("/data/tracklist.json")
            .then(req => req.json())
            .then(json => dispatch(receivePlaylist(json)));
    }
}

export function fetchPlaylistIfEmpty() {
    return dispatch(fetchPlaylist());
}