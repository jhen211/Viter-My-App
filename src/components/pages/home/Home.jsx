import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import About from "./about/About";

import Contact from "../../partials/Contact";
import Footer from "../../partials/Footer";
import Testimonial from "./testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonial/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
