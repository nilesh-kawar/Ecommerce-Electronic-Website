import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

// import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
