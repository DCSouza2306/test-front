import actionsTypes from "../../actions/action-types";

const initialState = {
 currentPosts: false,
};

export function modalReducer(state = initialState, action) {
 switch (action.type) {
  case actionsTypes.HANDLE_MODAL:
   return {
    ...state,
    displayModal: action.payload,
   };
  default:
   return state;
 }
}
