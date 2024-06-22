import React, { useEffect, useRef, useState } from "react";
import dog from "../assets/dog_img.svg";

const leadingtagsData = [
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
  { image: dog, text: "Dog 01" },
];

const LeadingCont = ({ image, text }) => (
  <div className="bg-gradient-to-tr from-pink-100 via-darkBlue to-purple-400 px-[1px] py-[1px] rounded-2xl">
    <div className="w-full bg-darkBlue flex items-center justify-center px-3 py-2 gap-6 rounded-2xl">
      <img src={image} alt="Dog" />
      <p className="mr-6">{text}</p>
    </div>
  </div>
);

const LeadingContainer = ({ isFirst, position }) => (
  <div
    className={`${
      isFirst
        ? "bg-yellow mb-[30px] px-[4px] py-[4px]"
        : "bg-gradient-to-tr from-pink-100 via-darkBlue to-purple-400 mb-[20px] px-[3px] py-[3px]"
    } w-fit relative rounded-2xl`}
  >
    <div
      className={`${
        isFirst ? "md:h-[300px] md:w-[300px] h-[200px] w-[200px]" : "h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
      } flex items-center justify-center relative rounded-2xl bg-darkBlue`}
    >
      <div
        className={`bg-yellow ${
          isFirst
            ? "h-[60px] w-[60px] -bottom-[30px]"
            : "h-[50px] w-[50px] -bottom-[25px]"
        } rounded-full absolute flex items-center justify-center text-darkBlue text-[16px]`}
      >
        {position}
      </div>
    </div>
  </div>
);

const Leading = () => {
  // const containerRef = useRef(null);

  // const handleScroll = () => {
  //   if (containerRef.current) {
  //     const scrollPosition = containerRef.current.scrollLeft;
  //     const containerWidth = containerRef.current.offsetWidth;
  //     const children = Array.from(containerRef.current.children);

  //     children.forEach((child) => {
  //       const childWidth = child.offsetWidth;
  //       const childPosition = child.offsetLeft;

  //       if (
  //         scrollPosition + containerWidth / 2 >= childPosition &&
  //         scrollPosition + containerWidth / 2 <= childPosition + childWidth
  //       ) {
  //         child.classList.add("active");
  //       } else {
  //         child.classList.remove("active");
  //       }
  //     });
  //   }
  // };

  return (
    <div className="body_padding top_padding relative">
      <section
        // ref={containerRef}
        // onScroll={handleScroll}
        className="flex items-end flex-wrap justify-center gap-10 mb-10"
      >
        <div className="hidden md:block">
          <LeadingContainer isFirst={false} position="3rd" />
        </div>
        <LeadingContainer isFirst={true} position="1st" />
        <LeadingContainer isFirst={false} position="2nd" />
        <div className="block md:hidden">
          <LeadingContainer isFirst={false} position="3rd" />
        </div>
      </section>

      <section className="flex items-center justify-center flex-wrap gap-6 ">
        {leadingtagsData.map((item, index) => (
          <LeadingCont key={index} image={item.image} text={item.text} />
        ))}
      </section>
      <div className="w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 -top-[300px] -left-[300px]" />
    </div>
  );
};

export default Leading;
