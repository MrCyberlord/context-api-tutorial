import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
