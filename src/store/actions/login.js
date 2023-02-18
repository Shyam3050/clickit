import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";
import { authLoaderState } from "..";

export const login = createAsyncThunk(
  "userInfo/login",
  async (_, {dispatch}) => {
    try {
      dispatch(authLoaderState());
      const firebaseAuth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
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
