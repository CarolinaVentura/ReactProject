import {TOKEN_FETCH_ERROR, TOKEN_FETCH_SUCCEDED} from "../constants/action-types";

const initialState = [];

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOKEN_FETCH_SUCCEDED:
            console.log("Token fetch succeed: " + action.payload);
            return [ ...state,  action.payload ];
        case TOKEN_FETCH_ERROR:
            console.log("Token fetch error: " + action.message);
        default:
            return state;
    }
};

export default authReducer; 