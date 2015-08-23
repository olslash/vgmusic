import React, { Component } from 'react';
import { Paper, FontIcon, IconButton } from 'material-ui';

const defaultIconStyle = {
    fontSize: "48px",
};

const defaultButtonStyle = {
    paddingRight: "20px",
    display: "inline",
    listStyleType: "none",
};

class PlayPauseButton extends Component {
    render() {
        let buttonStyle = {
            ...defaultButtonStyle
        }

        let iconStyle = {
            ...defaultIconStyle
        }

        return (
            <li style={buttonStyle}>
                <IconButton
                    iconStyle={iconStyle}
                    className="playbtn"
                    iconClassName="material-icons">
                    play_circle_filled
                </IconButton>
            </li>
        )
    }
}

class NextButton extends Component {
    render() {
        let buttonStyle = {
            ...defaultButtonStyle
        }

        let iconStyle = {
            ...defaultIconStyle
        }

        return (
            <li style={buttonStyle}>
                <IconButton
                    iconStyle={iconStyle}
                    className="skipbtn"
                    iconClassName="material-icons">
                    skip_next
                </IconButton>
            </li>
        )
    }
}

class PreviousButton extends Component {
    render() {
        let buttonStyle = {
            ...defaultButtonStyle
        }

        let iconStyle = {
            ...defaultIconStyle
        }

        return (
            <li style={buttonStyle}>
                <IconButton
                    iconStyle={iconStyle}
                    className="prevbtn"
                    iconClassName="material-icons">
                    skip_previous
                </IconButton>
            </li>
        )
    }
}

class RandomButton extends Component {
    render() {
        let buttonStyle = {
            ...defaultButtonStyle,
            paddingLeft: "50px"
        }

        let iconStyle = {
            ...defaultIconStyle
        }
 
        return (
            <li style={buttonStyle}>
                <IconButton
                    iconStyle={iconStyle}
                    className="shufflebtn"
                    iconClassName="material-icons">
                    shuffle
                </IconButton>
            </li>
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
                            <PreviousButton />
                            <PlayPauseButton />
                            <NextButton />
                            <RandomButton />
                        </ul>
                    </div>
        		</Paper>
        	</div>
        )
    }
}

export default Player;