import actionsTypes from "../../actions/action-types";

const initialState = {
 currentPosts: null,
};

export function postsReducer(state = initialState, action) {
 switch (action.type) {
  case actionsTypes.SET_POSTS:
   return {
    ...state,
    currentPosts: action.payload,
   };
   case actionsTypes.DELETE_POST:
   return {
    ...state,
    deletedPost: action.payload,
   };
  case actionsTypes.UPDATE_POST:
   return {
    ...state,
    updatedPost: action.payload,
   };
  default:
   return state;
 }
}
