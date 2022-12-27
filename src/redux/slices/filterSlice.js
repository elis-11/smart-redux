import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "popular",
    sort: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('action.setCategoryId', action)
      state.categoryId = action.payload;
    },
  },
});

export const {setCategoryId} = filterSlice.actions; // cut setCategoryId as constants and export it

export default filterSlice.reducer;  
