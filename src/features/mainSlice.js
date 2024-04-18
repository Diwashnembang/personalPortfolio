import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  message: "noo",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    test: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { test } = mainSlice.actions;
export default mainSlice.reducer;
