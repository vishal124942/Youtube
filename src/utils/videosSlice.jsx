import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "videos",
  initialState: {
    Videos: [],
  },
  reducers: {
    AddVideos: (state, action) => {
      state.Videos.push(...action.payload);
    },
  },
});
export const { AddVideos } = VideoSlice.actions;
export default VideoSlice.reducer;
