import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: 0,
  size: [],
  color: [],
  amount: 0,
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
