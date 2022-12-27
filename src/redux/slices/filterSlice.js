import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "popular",
    sorted: "rating",
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
    setSort(state, action) {
      state.sort = action.payload;
    }
  },
});

export const {setCategoryId, setSort} = filterSlice.actions; // cut setCategoryId as constants and export it

export default filterSlice.reducer;  
