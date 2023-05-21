import actionsTypes from "./action-types";

export function loginUser(payload){
    return {
        type: actionsTypes.LOGIN,
        payload
       }
}

export function setPost(payload){
    return {
        type: actionsTypes.SET_POSTS,
        payload
    }
}