import React, { Component } from 'react';
import { Paper, FontIcon, IconButton } from 'material-ui';

class PlayPauseButton extends Component {
    render() {
        return (
            <IconButton
                iconClassName="material-icons">
                play_circle_filled
            </IconButton>
        )
    }
}

class NextButton extends Component {
    render() {
        return (
            <IconButton
                iconClassName="material-icons">
                skip_next
            </IconButton>
        )
    }
}

class PreviousButton extends Component {
    render() {
        return (
            <IconButton
                iconClassName="material-icons">
                skip_previous
            </IconButton>
        )
    }
}

class RandomButton extends Component {
    render() {
        return (
            <IconButton
                iconClassName="material-icons">
                shuffle
            </IconButton>
        )
    }
}

class Player extends Component {
    render() {
        let playerStyle = {
            height: "100px",
            backgroundColor: "#eee"
        };

        return (
        	<div className="player-container">
        		<Paper style={playerStyle} zIndex={2}>
                    <div className="player-controls">
                        <ul>
                            <li><PreviousButton /></li>
                            <li><PlayPauseButton /></li>
                            <li><NextButton /></li>
                        </ul>
                    </div>
        		</Paper>
        	</div>
        )
    }
}

export default Player;