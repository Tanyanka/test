import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {createHistory} from 'history';
import {reduxReactRouter} from 'redux-router';

const middleware = [thunk, promise];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            reduxReactRouter({createHistory}),
            applyMiddleware(...middleware)
        )
    )
}
