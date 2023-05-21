import userActionsTypes from "./action-types";

export function loginUser(payload){
    return {
        type: userActionsTypes.LOGIN,
        payload
       }
}