import { USERCART } from '../constants';
export function getUserCart(usercart) {
return {
type: USERCART,
payload: usercart
}
}