import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { postsReducer } from "./posts/reducer";
import { modalReducer } from "./modal/reducer";

const rootReducer = combineReducers({userReducer,postsReducer, modalReducer});

export default rootReducer