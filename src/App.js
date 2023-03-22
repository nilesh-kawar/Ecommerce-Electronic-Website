import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import TrendingCategories from "./components/Categories/Trending";
import LatestProducts from "./components/ProductCard/LatestProducts";

// import Pages
// import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import SubBanner from "./components/SubBanner/SubBanner";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Hero />
      <TrendingCategories />
      <SubBanner />
      <LatestProducts />
      <Footer />
    </div>
  );
}

export default App;
