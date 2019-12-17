  
import {LOGIN} from '../actions/actionTypes'

const initState = {
    isLogged: false,
};

export default function AuthReducer(storeState = initState, action){
    switch (action.type) {
        case LOGIN:
            console.log("Ok")
            return {...storeState, isLogged: action.value};
    
        default:
            return storeState;
    }
}