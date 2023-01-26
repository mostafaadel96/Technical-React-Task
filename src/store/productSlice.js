import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Generates pending, fulfilled and rejected action types
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: { products: [], isLoading: false },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      // console.log(state.products);
      // console.log(action);
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export default productSlice.reducer;
