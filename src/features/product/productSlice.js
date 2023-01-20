import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  amount: 0,
  size: [],
  color: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
