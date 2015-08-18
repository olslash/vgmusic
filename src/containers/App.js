import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Styles } from 'material-ui';

import configureStore from '../store';
import PlaylistApp from './PlaylistApp'

const store = configureStore();
let ThemeManager = new Styles.ThemeManager();

class App extends Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <PlaylistApp /> }
                </Provider>       
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default App;