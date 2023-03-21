import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Trending";

// import Pages
// import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Hero />
      <Categories />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
