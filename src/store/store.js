import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = createStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;