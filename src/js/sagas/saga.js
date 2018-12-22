import {fork} from "redux-saga/effects";
import mySaga from "./articles"
import tokenSaga from "./auth"

function* rootSaga() {
    yield [
        fork(mySaga),
        fork(tokenSaga),
    ];

}

export default rootSaga;