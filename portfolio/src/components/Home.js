// Home.js
import React from "react";
import Hero from "./Hero"; // Import the Hero component

const Home = () => {
  return (
    <div>
      <Hero
        imageUrl="portfolio/src/components/Hero.js" // Replace with the actual image URL
        text="Welcome to Our Website!" // Add your desired text here
      />
      {/* Other content for your homepage */}
    </div>
  );
};

export default Home;
