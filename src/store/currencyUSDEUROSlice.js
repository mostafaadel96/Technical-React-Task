import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencyUSDEURO = createAsyncThunk(
  "currencyUSDEURO/getCurrency",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(
        " https://api.freecurrencyapi.com/v1/latest?apikey=xTcy3kWVwnt8DOSfbx4hXVKdnGj2UkPllZDXQlea&currencies=EUR%2CUSD")
      const data = res.data.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const currencyUSDEUROSlice = createSlice({
  name: "currencyUSDEURO",
  initialState: { currencyUSDEURI: null, Loading: false },
  reducers: {},
  extraReducers: {
    [getCurrencyUSDEURO.pending]: (state,action) => {
      state.Loading = true;
      state.error = null;
    //   console.log(action);
    },
    [getCurrencyUSDEURO.fulfilled]: (state,action) => {
      state.Loading = false;
      state.currency = action.payload;
    //   console.log(state.currency);
    //   console.log(action);
    },
    [getCurrencyUSDEURO.rejected]: (state,action) => {
      state.Loading = false;
    //   state.error = action.payload;
    //   console.log(action);
    }
  },
});
export default currencyUSDEUROSlice.reducer;
