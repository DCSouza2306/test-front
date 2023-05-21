import userActionsTypes from "../../actions/action-types";

const initialState = {
 currentPosts: null,
};

export function postsReducer(state = initialState, action) {
 switch (action.type) {
  case userActionsTypes.SET_POSTS:
   return {
    ...state,
    currentPosts: action.payload,
   };
  default:
   return state;
 }
}
