import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import Marquee from "./Component/Marquee";
import About from "./Component/About";
import Play from "./Component/Play";
import Feature from "./Component/Feature";
import Reviews from "./Component/Reviews";
import Card from "./Component/Card";
import Ready from "./Component/Ready";
import Footer from "./Component/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
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
}

export default App;
