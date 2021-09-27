import React from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HeroSection />
    </>
  );
};

export default Main;
