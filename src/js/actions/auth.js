
import  {FETCH_TOKEN, FETCH_USER, USER_FETCH_SUCCEDED} from '../constants/action-types'; 

export const fetchToken = token => ({type: FETCH_TOKEN, payload: token});
export const fetchUserSuccess = user => ({type: USER_FETCH_SUCCEDED, payload: user});