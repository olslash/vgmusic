import React, { Component, PropTypes } from 'react';
import { AppBar, Paper } from 'material-ui';

class Header extends Component {
    render() {
        let headerStyle = {
            height: "65px",
            backgroundColor: "#eee",
        }

        return (
            <div className="header-container">
                <Paper zIndex={1} style={headerStyle}>
                </Paper>
            </div>
        )
    }
}

export default Header;