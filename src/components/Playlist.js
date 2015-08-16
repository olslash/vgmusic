import React, { Component, PropTypes } from 'react';

class Track extends Component {
    render() {
        const { track } = this.props;
        return (
            <tr>
                <td>{track.id + 1}</td>
                <td>{track.game}</td>
                <td>{track.title}</td>
            </tr>
        )
    }
}

class Playlist extends Component {
    render() {
        const { tracks } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Track #</th>
                        <th>Game</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map(track => {
                        return <Track track={track} />
                    })}
                </tbody>
            </table>
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