import * as types from './actionTypes';

function testActionAC(data) { // created in prototyping purpose
    return {
        type: types.TEST_ACTION,
        payload: data
    }
}

export function testAction(data) {
    return dispatch => {
        dispatch(testActionAC(data));
    };
}
