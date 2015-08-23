import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPlaylist } from '../actions';
import { Player, LoadingScreen, Playlist, Header } from '../components';

class PlaylistApp extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPlaylist());
    }

    render() {
        const { tracks, isFetching } = this.props.tracklist;

        if (isFetching && tracks.length === 0) {
            return (
                <div className="app">
                    <LoadingScreen />
                </div>
            )
        }

        return (
            <div className="app">
                <Header />
                <div>
                {!isFetching && tracks.length === 0 &&
                    <h1>Empty</h1>
                }

                {tracks.length > 0 &&
                    <Playlist tracks={tracks} />
                }
                </div>
                <Player />
            </div>
        );
    }
};

function select(state) {
    return state;
}

export default connect(select)(PlaylistApp);