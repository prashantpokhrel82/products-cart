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
  reducers: {
    increase: (state, { payload }) => {
      state.cartItems = state.cartItems.map((product) => {
        if (product.id === payload) {
          product.amount++;
        }
        return product;
      });
    },
    decrease: (state, { payload }) => {
      state.cartItems = state.cartItems
        .map((product) => {
          if (product.id === payload) {
            product.amount--;
          }
          return product;
        })
        .filter((product) => product.amount > 0);
    },
    deleteItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== payload
      );
    },
    calculateTotal: (state) => {
      //   console.log("calulcate");
      const { amount, total } = state.cartItems.reduce(
        (totals, product) => {
          totals.amount += product.amount;
          totals.total += product.price * product.amount;
          return totals;
        },
        { amount: 0, total: 0 }
      );
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export default cartSlice.reducer;
export const { increase, decrease, deleteItem, calculateTotal } =
  cartSlice.actions;
