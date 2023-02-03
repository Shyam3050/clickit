import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { fetchCart } from "../../utils/fetchLocalstoragedata";

const initialState = {
  cartItems: fetchCart(),
  cartQty: 0,
};
console.log(initialState, "insi");
export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addtoCart: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      state.cartQty++;
      if (!existingItem) {
        state.cartItems.unshift(payload);
      } else {
        existingItem.qty++;
      }
    },
    removeFromCart: (state, { payload }) => {
      const id = payload.id;
      state.cartQty--;

      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.qty === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.qty--;
      }
    },
  },
});
