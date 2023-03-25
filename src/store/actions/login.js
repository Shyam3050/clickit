import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { authLoaderState } from "..";
import { newUserDb } from "../../utils/firebaseFunctions";

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
      newUserDb(providerData[0].uid)
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

