import React, { Component, PropTypes } from 'react';
import { AppBar } from 'material-ui';

class Header extends Component {
    render() {
        return (
            <div>
            	<AppBar
            		title="Vidya Game Music Player" />
            </div>
        )
    }
}

export default Header;