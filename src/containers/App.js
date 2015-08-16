import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import PlaylistApp from './PlaylistApp'

export default class App extends Component {
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