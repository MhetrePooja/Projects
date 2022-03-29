import { createStore } from "redux";

import cartReducers from "../redux/reducers/cartReducers"
const store = createStore(cartReducers);

export default store;