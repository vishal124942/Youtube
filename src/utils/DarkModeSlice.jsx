import { createSlice } from "@reduxjs/toolkit";
const DarkMode = createSlice({
  name: "DarkMode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
export const { toggleDarkMode } = DarkMode.actions;
export default DarkMode.reducer;
