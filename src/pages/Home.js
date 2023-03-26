import React from "react";
import Hero from "../components/Hero/Hero";
import TrendingCategories from "../components/Categories/Trending";
import SubBanner from "../components/SubBanner/SubBanner";
import LatestProducts from "../components/ProductCard/LatestProducts";
import OfferBanner from "../components/SubBanner/OfferBanner";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Blog from "../components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Hero />

      <TrendingCategories />
      <SubBanner />
      <LatestProducts />
      <OfferBanner />
      <PopularProducts />
      <Blog />
    </div>
  );
};

export default Home;
