// import React from 'react'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap";
import Chapters from "./components/chapters";
import Leading from "./components/leading";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Leadership from "./components/leadership";
import NFT from "./components/nft";
import Introduction from "./components/introduction";
import Tokenomics from "./components/Tokenomics";
import Crypto from "./components/crypto";
import Certificate from "./components/cetificate";

const App = () => {
  return (
    <div className="bg-darkBlue p-0 m-0 box-border text-white font-Bricolage_Grotesque w-screen scroll-smooth">
      <Navbar />
      <section className='bg-[url("../hacker.gif")] bg-cover bg-center bg-opacity-5 bg-no-repeat'>
        <Hero />
        <Introduction />
      </section>
      <Chapters />
      <Roadmap />
      <Tokenomics />
      <Certificate />
      <Crypto />
      <Leading />
      <Leadership />
      <NFT />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
