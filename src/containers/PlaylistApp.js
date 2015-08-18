import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPlaylist } from '../actions';
import { LoadingScreen, Playlist, Footer, Header } from '../components';

class PlaylistApp extends Component {  
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPlaylist());
    }

    render() {
        const { dispatch, tracks, isFetching } = this.props;

        if (isFetching && tracks.length === 0) {
            return (
                <div>
                    <LoadingScreen />
                </div>
            )
        }

        return (
            <div>
                <Header /> 
                <div>
                {!isFetching && tracks.length === 0 &&
                    <h1>Empty</h1>
                }

                {tracks.length > 0 && 
                    <Playlist tracks={tracks} />
                }
                </div>
                <Footer />
            </div>
        );
    }
};

PlaylistApp.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        game: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })),
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function select(state) {
    const { tracks, isFetching } = state.tracklist;
    return {
        tracks,
        isFetching
    }
}

export default connect(select)(PlaylistApp);