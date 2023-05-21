import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { postsReducer } from "./posts/reducer";

const rootReducer = combineReducers({userReducer,postsReducer});

export default rootReducer