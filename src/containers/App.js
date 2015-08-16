import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';

import PlaylistApp from './PlaylistApp'

const store = configureStore();

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