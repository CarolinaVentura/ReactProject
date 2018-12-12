
import { ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";

//os reducers são funções javascript que pegam num state e o alteram de acordo com uma ação. 
// neste caso, o primeiro paramentro é o state atual, e o segundo parametro é a ação que o leva a ser alterado

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_ARTICLE:
            return {...state, articles: [...state.articles, action.payload]};
        
        case DELETE_ARTICLE:
            return {...state, articles: [...state.articles.filter((x)=> x != action.payload)]};


        case ARTICLES_FETCH_SUCCEEDED:
            
            // adiciona os artigos obtidos através da API
            // funcionamento idêntico ao ADD_ARTICLE, mas com a diferença de se aplicar o Spread ao payload
            // pois o que é retornado da API é uma lista de artigos e não apenas um
            return { ...state, articles: [...state.articles, ...action.payload] };


        default:
            return state; 
    }
}


export default rootReducer; 