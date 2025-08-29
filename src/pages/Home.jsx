import React from "react";
import Header from "../components/Header.jsx";
import Podcast from "../components/Podcast.jsx";
import Hero from "../components/Hero.jsx";
import Books from "../components/Books1.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Podcast />
      <Books />
      <Footer />
    </>
  );
};

export default Home;
