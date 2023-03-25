import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slices/userInfo";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userInfoSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export const { logout, cartShow, cartHide,authLoaderState } = userInfoSlice.actions;
export const { addtoCart, removeFromCart, clearCart, addDeliveryAddressId } = cartSlice.actions;
