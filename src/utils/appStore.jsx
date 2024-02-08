import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./appSlice";
import videoReducer from "./videosSlice";
const store = configureStore({
  reducer: {
    app: MenuReducer,
    videos: videoReducer,
  },
});
export default store;
