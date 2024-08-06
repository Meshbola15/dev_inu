// import React from "react";
import pinksale from "../assets/logos/pinksale.png";
import cyberscope from "../assets/logos/image.png";
import dexview from "../assets/logos/dexview.svg";

const Logo = [
  {
    image: pinksale,
    text: "Pinksale",
  },
  {
    image: cyberscope,
    text: "Cyberscope",
  },
  {
    image: dexview,
    text: "Dexview",
  },
];

const Crypto = () => {
  return (
    <div className="relative my-24 body_padding ">
      <div id="partners" className="">
        <h1 className="text-title_moblie md:text-title mb-6">Partners</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {Logo.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className="gradient px-1 py-1 rounded-2xl">
              <div key={index} className="flex items-center bg-black px-10 py-4 rounded-2xl">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-[40px] md:w-[80px]"
                />
                <p className="text-center text-white font-bold text-[20px] md:text-[30px] ml-4">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="md:w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 -top-[300px] -left-[300px] " /> */}
    </div>
  );
};

export default Crypto;
