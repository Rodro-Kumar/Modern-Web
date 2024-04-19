import React from "react";
import About from "../src/Component/About";
import Play from "../src/Component/Play";
import Feature from "../src/Component/Feature";
import Reviews from "../src/Component/Reviews";
import Card from "../src/Component/Card";
import Marquee from "../src/Component/Marquee";
import Footer from "../src/Component/Footer";
import Nav from "../src/Component/Nav";
import Hero from "../src/Component/Hero";
import Ready from "../src/Component/Ready";
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Play />
      <Feature />
      <Reviews />
      <Card />
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
