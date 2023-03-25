import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../../utils/fetchLocalstoragedata";

const initialState = {
  cartItems: fetchCart(),
  cartQty: 0,
  deliveryAddressId: "",
};
export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.cartQty = 0;
    },
    addDeliveryAddressId: (state, { payload }) => {
      state.deliveryAddressId = payload;
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
