import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import userCart from '../reducers/userCart'
const rootReducer = combineReducers(
    {
        user: userReducer,
        usercart:userCart
    }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;