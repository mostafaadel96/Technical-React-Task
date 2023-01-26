import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Generates pending, fulfilled and rejected action types
export const getCurrencyHistory = createAsyncThunk(
  "currencyHistory/getCurrencyHistory",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(
        "https://api.freecurrencyapi.com/v1/historical?apikey=xTcy3kWVwnt8DOSfbx4hXVKdnGj2UkPllZDXQlea&currencies=EUR%2CUSD%2CCAD&date_from=2022-12-25T15%3A08%3A01.077Z&date_to=2023-01-24T15%3A08%3A01.078Z"
      );
      const data = res.data.data;
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const currencyHistorySlice = createSlice({
  name: "currencyHistory",
  initialState: { currencyHistory: [], isLoading: false },
  reducers: {},
  extraReducers: {
    [getCurrencyHistory.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getCurrencyHistory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currencyHistory = action.payload;
      // console.log(state.currencyHistory);
      // console.log(action);
    },
    [getCurrencyHistory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
  },
});
export default currencyHistorySlice.reducer;
