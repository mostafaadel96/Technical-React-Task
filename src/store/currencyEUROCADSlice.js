import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencyEUROCAD = createAsyncThunk(
  "currencyEUROCAD/getCurrencyEUROCAD",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=xTcy3kWVwnt8DOSfbx4hXVKdnGj2UkPllZDXQlea&currencies=EUR%2CCAD&base_currency=EUR"
      );
      const data = res.data.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const currencyEUROCADSlice = createSlice({
  name: "currencyEUROCAD",
  initialState: { currencyEUROCAD: null, isLoading: false },
  reducers: {},
  extraReducers: {
    [getCurrencyEUROCAD.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    //   console.log(action);
    },
    [getCurrencyEUROCAD.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currencyEUROCAD = action.payload;
    //   console.log(state.currencyEUROCAD);
    //   console.log(action);
    },
    [getCurrencyEUROCAD.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    //   console.log(action);
    },
  },
});
export default currencyEUROCADSlice.reducer;
