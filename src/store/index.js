import { configureStore } from "@reduxjs/toolkit";
import currencyHistory from "./historySlice"
import currencyEURICAD from "./currencyEUROCADSlice"
import currencyUSDEURI from "./currencyUSDEUROSlice"
import products from "./productSlice"
export default configureStore({
  reducer: {
    currencyHistory,
    currencyEURICAD,
    currencyUSDEURI,
    products,
  },
});
