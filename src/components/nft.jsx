import React, { useEffect, useState } from "react";
import NFT_1 from "../assets/NFT_1.jpeg";
import NFT_2 from "../assets/NFT_2.jpeg";
import NFT_3 from "../assets/NFT_3.jpeg";

const NFTImages = [NFT_1, NFT_2, NFT_3];

const NFT = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) =>
        prevPosition === NFTImages.length - 1 ? 0 : prevPosition + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="body_padding top_padding">
      <h3 className="text-white text-title_moblie md:text-title mb-8">NFT's</h3>
      <div className="flex items-center justify-center mx-auto">
        <section
          className=" flex md:hidden items-center transition-transform duration-500"
          style={{ transform: `translateX(-${scrollPosition * 100}%)` }}
        >
          {NFTImages.map((item, index) => (
            <div
              key={index}
              className="w-full  mx-auto flex justify-center items-center flex-shrink-0"
            >
              <div className="border-[2px] border-yellow rounded-2xl">
                <img
                  src={item}
                  className=" w-[70vw]  md:w-[20vw] rounded-2xl"
                />
              </div>
            </div>
          ))}
        </section>
        <section className="hidden md:flex items-center justify-center gap-8">
          {NFTImages.map((item, index) => (
            <div
              key={index}
              className="w-full mx-auto flex justify-center items-center flex-row "
            >
              <div className="border-[2px] border-yellow rounded-2xl">
                <img
                  src={item}
                  className=" w-[70vw]  md:w-[20vw] rounded-2xl"
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NFT;
