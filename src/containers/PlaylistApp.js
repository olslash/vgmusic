import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../actions';

import LoadingScreen from '../components/LoadingScreen';
import Playlist from '../components/Playlist';

class PlaylistApp extends Component {  
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPlaylist());
    }

    render() {
        const { dispatch, tracks, isFetching } = this.props;
        return (
            <div className="container">
                
                <div className="row header">
                </div>
                
                <div className="row content">
                {isFetching && tracks.length === 0 &&      
                    <LoadingScreen />
                }

                {!isFetching && tracks.length === 0 &&
                    <h1>Empty</h1>
                }

                {tracks.length > 0 && 
                    <Playlist tracks={tracks} />
                }
                </div>

                <div className="row footer">
                </div>

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