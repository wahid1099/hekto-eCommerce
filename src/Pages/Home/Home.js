import React from "react";
import CenterBanner from "../CenterBanner/CenterBanner";
import Discount from "../Discount/Discount";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import LatestProduct from "../LatestProducts/LatestProduct";
import Newslater from "../Newslater/Newslater";
import Ouroffers from "../OurserviceOffers/Ouroffers";
import TopBanner from "../TopBannerSlider/TopBanner";
import TopCategories from "../TopCategories/TopCategories";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import TopHeader from "../Header/TopHeader";
import NavbarMenu from "../Header/NavbarMenu";
import LatestBlog from "../LatestBlog/LatestBlog";
import Footer from "../FooterComponent/Footer";
const Home = () => {
  return (
    <>
      <TopHeader />
      <NavbarMenu />
      <TopBanner />
      <FeaturedProducts />
      <LatestProduct />
      <Ouroffers />
      <CenterBanner />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
        <img src="https://i.ibb.co/Q6M5wxV/bannerbottom.png" className="img-fluid"/>
      <LatestBlog />
        <Footer/>
    </>
  );
};

export default Home;
