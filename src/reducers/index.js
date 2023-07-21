import { combineReducer } from "redux";
import loginReducer from "./loginReducer";
import messageBagReducer from "./messageBagReducer";

export default combineReducer({
    loginReducer,
    messageBagReducer
});