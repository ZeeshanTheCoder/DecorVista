import React from "react";
import FeaturedCategory from "../components/FeaturedCategory";
import AwesomeSection from "../components/AwesomeSection";
import OfferSection from "../components/OfferSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import "../App.css";
import Header from "../components/Header";
import HeroSection from "../components/BannnerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategory />
      <AwesomeSection title="Awesome" />
      <OfferSection />
      <AwesomeSection title="Best Seller" />
      <SubscribeSection />
    </>
  );
};

export default Home;
