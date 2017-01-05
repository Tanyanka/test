import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router} from 'react-router';
import {ReduxRouter} from 'redux-router';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter>
            <Router>
                {routes}
            </Router>
        </ReduxRouter>
    </Provider>
    , document.getElementById('app'));
