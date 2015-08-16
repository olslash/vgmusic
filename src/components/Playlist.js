import React, { Component, PropTypes } from 'react';

class Playlist extends Component {
    render() {
        const { tracks } = this.props;
        return (
            <h1>Playlist Length: {tracks.length}</h1>
        )
    }
}

Playlist.propTypes = {
    tracks: PropTypes.array.isRequired
}

export default Playlist;