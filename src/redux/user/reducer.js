import userActionsTypes from "../../actions/action-types";

const initialState = {
 currentUser: null,
};

export function userReducer(state = initialState, action) {
 switch (action.type) {
  case userActionsTypes.LOGIN:
   return {
    ...state,
    currentUser: action.payload,
   };
  default:
   return state;
 }
}
