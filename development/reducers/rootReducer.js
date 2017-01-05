import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import ReduxTestReducer from './ReduxTestReducer'; // created in prototyping purpose

const rootReducer = combineReducers({
    router: routerStateReducer,
    ReduxTestReducer // created in prototyping purpose
});

export default rootReducer;
