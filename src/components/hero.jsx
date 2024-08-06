import React, { useEffect } from "react";
import inu from "../assets/inu_img.svg";
import hero_bg from "../assets/hero_bg_img.svg";
import { useInView } from "react-intersection-observer";
import { RiFileCopyLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

const Hero = () => {
  const {inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [isCopied, setIsCopied] = React.useState(false);

  useEffect(() => {
    isCopied && setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <div
      id="home"
      className={` relative overflow-hidden w-screen min-h-screen ${
        inView ? "animate-fade-up" : ""
      } mt-[50px] md:mt-0`}
    >
      <section className="w-full min-h-screen flex flex-col-reverse body_padding top_padding items-center justify-center md:justify-between md:flex-row z-20">
        <section className="flex flex-col items-center md:items-start">
          {/* <img
            src={hero_txt}
            alt="hero text"
            className="overflow-hidden animate-wiggle animate-infinite animate-duration-[3000ms] w-full md:w-[55vw] animate-delay-[2ms] animate-ease-linear animate-fill-both"
          /> */}
          <div className="text-center font-bold text-[#FED909] text-2xl md:text-5xl md:text-left animate-wiggle animate-infinite animate-duration-[3000ms] animate-delay-[2ms] animate-ease-linear animate-fill-both">
            Dev Inu: Unleashing the Power of Developers in the Crypto World
          </div>
          <p className="text-text_grey text-text mt-4 text-center md:text-left">
            A Tale of Recognition and Innovation in the Crypto Realm
          </p>
          <div
            className="flex items-center justify-items-start space-x-4 cursor-pointer my-4"
            onClick={() => {
              setIsCopied(true);
              navigator.clipboard.writeText(
                "0xdE71903B457f7e23d7f48B9273f79a7e07246882"
              );
            }}
          >
            <div className="">
              <p className="text-[10px] md:text-text text-center text-yellow font-black text-wrap">
              0xdE71903B457f7e23d7f48B9273f79a7e07246882
              </p>
            </div>
            <div className="cursor-pointer flex items-center justify-start p-0">
              {isCopied ? (
                <FaCheck color="green" className="m-0 p-0" size={20} />
              ) : (
                <RiFileCopyLine  className="m-0 p-0 text-yellow" size={20} />
              )}
            </div>
          </div>

          <a href="https://www.dexview.com/bsc/0xdE71903B457f7e23d7f48B9273f79a7e07246882" target="_blank" className="px-6 py-3 text-darkBlue bg-yellow rounded-lg text-text mt-4">
            Trade Now
          </a>
        </section>
        <section className="overflow-hidden z-20 flex justify-center">
          <img
            src={inu}
            alt="dev inu image"
            className="w-[70vw] md:w-[45vw] animate-shake animate-infinite animate-duration-[3000ms] animate-delay-[2ms] animate-ease-linear animate-fill-both"
          />
        </section>
      </section>

      <img
        src={hero_bg}
        alt="hero background"
        className="absolute -top-[100px] -right-[100px] z-0 opacity-55"
      />

      <div className="md:w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 -top-[300px] -left-[300px] overflow-hidden" />
    </div>
  );
};

export default Hero;
