import React from "react";
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
    <div className="body_padding py-24 bg-transparent">
      <div className="flex flex-wrap items-center justify-center gap-10">
        {Logo.map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <img src={item.image} alt={item.text} className="w-[40px] md:w-[80px]" />
            <p className="text-center text-gray-600 font-bold text-[20px] md:text-[30px] ml-4">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
