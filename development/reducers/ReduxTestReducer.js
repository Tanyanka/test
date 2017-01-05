import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ReduxTestReducer(state = initialState.reduxTest, action) { // created in prototyping purpose
    switch (action.type) {
        case types.TEST_ACTION:
            return [
                ...state,
                Object.assign({}, action.data)
            ];

        default:
            return state;
    }
}
