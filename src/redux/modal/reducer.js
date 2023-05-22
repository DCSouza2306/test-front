import actionsTypes from "../../actions/action-types";

const initialState = {
 modalType: null,
};

export function modalReducer(state = initialState, action) {
 switch (action.type) {
  case actionsTypes.HANDLE_MODAL:
   return {
    ...state,
    modalType: action.payload,
   };
  default:
   return state;
 }
}
