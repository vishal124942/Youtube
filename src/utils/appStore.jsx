import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./appSlice";
const store = configureStore({
  reducer: {
    app: MenuReducer,
  },
});
export default store;
