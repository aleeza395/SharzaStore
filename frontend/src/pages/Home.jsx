import React from "react";
import Hero from "../components/Hero";
import Latestcollection from "../components/Latestcollection";
import Bestseller from "../components/Bestseller";
import Ourpolicy from "../components/Ourpolicy";
import Reviewbox from "../components/Reviewbox";

const Home = () => {
  return (
    <div className="mx-10">
      <Hero />
      <Latestcollection />
      <Bestseller />
      <Ourpolicy />
      <Reviewbox />
    </div>
  );
};

export default Home;
