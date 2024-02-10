import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./appSlice";
import videoReducer from "./videosSlice";
import searchSlice from "./searchSlice";
import SuggVideosReducer from "./suggestedVideosSlice";
const store = configureStore({
  reducer: {
    app: MenuReducer,
    videos: videoReducer,
    search: searchSlice,
    SuggVideos: SuggVideosReducer,
  },
});
export default store;
