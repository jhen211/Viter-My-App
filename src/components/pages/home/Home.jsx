import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import About from "./about/About";
import Contact from "../../../partials/Contact";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
