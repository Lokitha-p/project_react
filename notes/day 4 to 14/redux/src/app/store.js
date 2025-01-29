import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/userslice";
const Store=configureStore({
    reducer:{
        userinfo:UserReducer,
    },
});
export default Store;