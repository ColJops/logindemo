import { applyMiddleware, configureStore } from "redux"; //createStore jest przestarzały - należy użyć configureStore
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = configureStore(reducers, applyMiddleware(...middlewares))
export { store };