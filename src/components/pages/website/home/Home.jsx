import React from "react";
import Services from "././services/Services";
import About from "././about/About";
import Banner from "././banner/Banner";
import Header from "../../../partials/Header";
import Contact from "../../../partials/Contact";
import Footer from "../../../partials/Footer";
import Testimonial from "./testimonials/Testimonial";

const Home = () => {
  return (
    <> 
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Banner />
          {/* <Services /> */}
          <About />
          <Testimonial />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
