import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFoodItems } from "../../utils/firebaseFunctions";

 export const getFoodItems = createAsyncThunk("userInfo/getFoodItems", async () => {
    try {
      const food_items = await getAllFoodItems().then((data)=> data)
      return food_items;
    } catch (error) {
        console.log(error);
    }
})