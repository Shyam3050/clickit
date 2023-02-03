import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.config";

export const login = createAsyncThunk("userInfo/login", async () => {
  try {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    return {
      refreshToken,
      user: providerData[0],
    };
  } catch (error) {
    console.log(error);
  }
});
