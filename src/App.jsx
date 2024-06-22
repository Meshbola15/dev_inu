// import React from 'react'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap";
import Chapters from "./components/chapters";
import Leading from "./components/leading";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Leadership from "./components/leadership";

const App = () => {
  return (
    <div className="bg-darkBlue p-0 m-0 box-border text-white font-Bricolage_Grotesque overflow-hidden">
      <Navbar />
      <Hero />
      <Chapters />
      <Roadmap />
      <Leading />
      <Leadership />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
