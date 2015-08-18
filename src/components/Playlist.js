import React, { Component, PropTypes } from 'react';
import FitText from 'react-fittext';

class Track extends Component {
    render() {
        const { track } = this.props;
        return (
            <li>
                <FitText compressor={4.0}>
                    <div>{track.game + ' - ' + track.title}</div>
                </FitText>
            </li>
        )
    }
}

class Playlist extends Component {
    render() {
        const { tracks } = this.props;
        return (
            <div className="row">
                <ul>
                    {tracks.map(track => {
                        return <Track 
                                className="twelve columns"
                                name={"song-"+track.id} 
                                key={track.id} 
                                track={track} />
                    })}
                </ul>
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