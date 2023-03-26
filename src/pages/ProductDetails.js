import React from "react";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import LatestProducts from "../components/ProductCard/LatestProducts";

const PropertyDetails = () => {
  return (
    <div>
      <Breadcrumb parent={"Home"} child={"Product"} />
      <ProductDetail />
      <LatestProducts />
    </div>
  );
};

export default PropertyDetails;
