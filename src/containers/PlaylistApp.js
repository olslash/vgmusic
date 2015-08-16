import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PlaylistApp extends Component {  
  render() {
    return (
      <h1>Hello World!</h1>
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
    isFetching: PropTypes.bool.isRequired
}

function select(state) {
    return {
        tracks: state.tracks,
        isFetching: state.isFetching
    }
}

export default connect(select)(PlaylistApp);