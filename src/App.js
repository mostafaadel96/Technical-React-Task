import "./App.css";
import Currency from "./components/currency/Currency";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Currency />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
