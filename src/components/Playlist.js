import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';

class Track extends Component {
    render() {
        const { track } = this.props;
        return (
            <li><div>{track.game + ' - ' + track.title}</div></li>
        )
    }
}

class Playlist extends Component {
    render() {
        const { tracks } = this.props;
        return (
            <div className="playlist-container">
                <Paper className="playlist-contnet" zDepth={2} rounded={false}>
                    <ul>
                        {tracks.map(track => {
                            return <Track 
                                    className="twelve columns"
                                    name={"song-"+track.id} 
                                    key={track.id} 
                                    track={track} />
                        })}
                    </ul>
                </Paper>
            </div>
        )
    }
}

Playlist.propTypes = {
    tracks: PropTypes.array.isRequired
}

Track.propTypes = {
    track: PropTypes.object.isRequired,
}

export default Playlist;