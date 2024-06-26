import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";

const store = configureStore({ reducer: { main: mainReducer } });

export default store;
