import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
//import tasksReducer from './tasksReducer';


export default combineReducers({
    auth: AuthReducer, 
    //tasks: tasksReducer,
});