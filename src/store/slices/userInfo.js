import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/login";
import { fetchUser } from "../../utils/fetchLocalstoragedata";
import { getFoodItems } from "../actions/getFoodItems";
const initialState = {
  userDetails: fetchUser(),
  foodItems: null,
  showCart: false,
  authLoader: false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    authLoaderState: (state) => {
      state.authLoader = !state.authLoader;
    },
    logout: (state) => {
      state.userDetails = "";
      localStorage.clear();
    },
    cartShow: (state) => {
      state.showCart = true;
    },
    cartHide: (state) => {
      state.showCart = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.userDetails = action.payload.user;
      localStorage.setItem("userDetails", JSON.stringify(state.userDetails));
    });
    builder.addCase(getFoodItems.fulfilled, (state, action) => {
      state.foodItems = action.payload;
    });
  },
});
