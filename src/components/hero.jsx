import React from "react";
import inu from "../assets/inu_img.svg";
import hero_txt from "../assets/hero_txt.png";
import hero_bg from "../assets/hero_bg_img.svg";
import { useInView } from "react-intersection-observer";
import second from '../../hacker.gif'

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div
      id="home"
      className={` relative overflow-hidden w-screen min-h-screen ${
        inView ? "animate-fade-up" : ""
      } mt-[50px] md:mt-0`}
    >
      <section className="w-full min-h-screen flex flex-col-reverse body_padding top_padding items-center justify-center md:justify-between md:flex-row z-20">
        <section className="overflow-hidden flex flex-col items-center md:items-start">
          <img
            src={hero_txt}
            alt="hero text"
            className="overflow-hidden animate-wiggle animate-infinite animate-duration-[3000ms]"
          />
          <p className="text-text_grey text-text mt-4 text-center md:text-left">
            A Tale of Recognition and Innovation in the Crypto Realm
          </p>
          <button className="px-6 py-3 text-darkBlue bg-yellow rounded-lg text-text mt-4">
            Trade Now
          </button>
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
