"use client";

import Services from "./services/page";
import Featured from "./featured/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
