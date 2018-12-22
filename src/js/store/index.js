import { createStore, combineReducers, applyMiddleware } from "redux"; 
import createSagaMiddleware from 'redux-saga'; 

// importar os sagas da aplicação
import mySaga from '../sagas/articles';

// importar os reducers da aplicação
import articles from "../reducers/index";
import auth from "../reducers/auth";
import user from "../reducers/user";

import rootSaga from "../sagas/saga";

// inicializar o saga Middleware
const sagaMiddleware = createSagaMiddleware();

// criar a store do Redux
const store = createStore(
    // caso exista mais do que 1 reducer, usar esta função para "combiná-los"
  combineReducers({
    articles, auth, user, 
  }),
    // associar o saga à store do Redux
    applyMiddleware(sagaMiddleware)
);

// executar o middleware sagas
sagaMiddleware.run(rootSaga);

export default store;