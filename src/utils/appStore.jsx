import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./appSlice";
import videoReducer from "./videosSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    app: MenuReducer,
    videos: videoReducer,
    search: searchSlice,
  },
});
export default store;
