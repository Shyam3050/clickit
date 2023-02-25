import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { authLoaderState } from "..";

export const login = createAsyncThunk(
  "userInfo/login",
  async (_, { dispatch }) => {
    try {
      dispatch(authLoaderState());
      const provider = new GoogleAuthProvider();
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      dispatch(authLoaderState());
      return {
        refreshToken,
        user: providerData[0],
      };
    } catch (error) {
      console.log(error);
      dispatch(authLoaderState());
    }
  }
);

