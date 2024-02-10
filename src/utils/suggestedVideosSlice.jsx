import { createSlice } from "@reduxjs/toolkit";

const SuggestedVideoSlice = createSlice({
  name: "SuggVideos",
  initialState: {
    SuggestedVideos: [],
  },
  reducers: {
    AddSuggVideos: (state, action) => {
      state.SuggestedVideos.push(...action.payload);
    },
  },
});
export const { AddSuggVideos } = SuggestedVideoSlice.actions;
export default SuggestedVideoSlice.reducer;
