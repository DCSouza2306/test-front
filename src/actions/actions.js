import actionsTypes from "./action-types";

export function loginUser(payload) {
 return {
  type: actionsTypes.LOGIN,
  payload,
 };
}

export function setPost(payload) {
 return {
  type: actionsTypes.SET_POSTS,
  payload,
 };
}

export function handleModal(payload){
    return {
        type: actionsTypes.HANDLE_MODAL,
        payload
    }
}
export function deletePost(payload){
    return{
        type: actionsTypes.DELETE_POST,
        payload,
    }
}
export function updatePost(payload){
    return{
        type: actionsTypes.UPDATE_POST,
        payload,
    }
}