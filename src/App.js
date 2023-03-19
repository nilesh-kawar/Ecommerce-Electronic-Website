import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

// import Pages
// import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
