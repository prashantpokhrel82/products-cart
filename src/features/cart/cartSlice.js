import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/data";

const initialState = {
  cartItems: products,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
