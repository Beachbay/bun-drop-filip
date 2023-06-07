import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/routes/Home";
import Menu from "./components/routes/Menu";
import BurgerCard from "./components/BurgerCard";
import Cart from "./components/routes/Cart";
import Order from "./components/routes/Order";

function App() {
  return (
    <div id="main-grid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
