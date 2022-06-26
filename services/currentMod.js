import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};
export const currentModSlice = createSlice({
  name: "currentMod",
  initialState,
  reducers: {
    addCurrentMod: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCurrentMod } = currentModSlice.actions;

export default currentModSlice.reducer;
