import { USERCART } from '../constants';
const initialState = {
usercart:''
};
const userCartReducer = (state = initialState, action) => {
switch(action.type) {
case USERCART:
return {
...state,
usercart:action.payload
};
default:
return state;
}
}
export default userCartReducer;