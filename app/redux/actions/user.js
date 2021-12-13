import { USER } from '../constants';
export function getUser(user) {
return {
type: USER,
payload: user
}
}