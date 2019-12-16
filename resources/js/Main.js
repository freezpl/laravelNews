import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './global/history';
import AppRoutes from './router/Routes';
import mainReducer from './store/reducers/mainReducer';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

export default class Main extends Component {
    render() {
        return (
       
          <AppRoutes />
     
        );
    }
}

if (document.getElementById('app')) {
    const store = createStore(mainReducer, applyMiddleware(reduxThunk));
    const app = (
        <Provider store={store}>
            <Router history = {history}>
                <Main />
            </Router>
        </Provider>
        );

    ReactDOM.render(app, document.getElementById('app'));
}
