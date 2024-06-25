import React, { useEffect, useState } from "react";
import dog from "../assets/dog_img.svg";
import dummy from "../assets/dummy_image.png";

const leadingTagsData = [
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

const leadingContainerData = [
  { isFirst: false, position: "2nd" },
  { isFirst: true, position: "1st" },
  { isFirst: false, position: "3rd" },
];

const LeadingCont = ({ image, text }) => (
  <div className="gradient px-[1px] py-[1px] rounded-lg md:rounded-2xl">
    <div className="w-full bg-darkBlue flex items-center justify-center px-2  md:px-3 py-2 gap-2 md:gap-6 rounded-lg md:rounded-2xl">
      <img src={image} alt="Dog" className="w-[30px] md:w-[40px]" />
      <p className="mr-2 text-sm md:text-text md:mr-6">{text}</p>
    </div>
  </div>
);

const LeadingContainer = ({ isFirst, position }) => (
  <div className="w-full flex items-center justify-center">
    <section
      className={`${
        isFirst ? "bg-yellow" : "gradient"
      } px-[2px] py-[2px] w-fit rounded-2xl`}
    >
      <div className="relative flex items-center justify-center w-full">
        <img
          src={dummy}
          alt=""
          className={`${isFirst ? "w-[70vw]" : "w-[60vw]"} rounded-2xl`}
        />
        <div className="absolute bottom-[-30px] left-0 right-0 mx-auto self-center w-[60px] h-[60px] bg-yellow flex items-center justify-center px-3 py-2 rounded-full">
          <p className="text-[20px] text-darkBlue text-center">{position}</p>
        </div>
      </div>
    </section>
  </div>
);

const Leading = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) =>
        prevPosition === leadingContainerData.length - 1 ? 0 : prevPosition + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative body_padding top_padding my-10 w-full">
      <div className="block md:hidden">
        <section
          className="flex items-center transition-transform duration-500"
          style={{ transform: `translateX(-${scrollPosition * 100}%)` }}
        >
          {leadingContainerData.map((item, index) => (
            <div key={index} className="w-full flex flex-shrink-0">
              <LeadingContainer isFirst={item.isFirst} position={item.position} />
            </div>
          ))}
        </section>
      </div>

      <div className="hidden md:flex items-end gap-4 justify-center">
        {leadingContainerData.map((item, index) => (
          <div key={index}>
            <section
              className={`flex items-center justify-center relative ${
                item.isFirst ? "bg-yellow mb-4" : "gradient"
              } px-1 py-1 rounded-2xl`}
            >
              <div>
                <img
                  src={dummy}
                  alt=""
                  className={`${item.isFirst ? "w-[30vw]" : "w-[20vw]"} rounded-2xl`}
                />
                <div className="absolute bottom-[-30px] left-0 right-0 mx-auto self-center w-[60px] h-[60px] bg-yellow flex items-center justify-center px-3 py-2 rounded-full">
                  <p className="text-[20px] text-darkBlue text-center">{item.position}</p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      <section className="flex items-center justify-center gap-3 md:gap-6 flex-wrap mt-9">
        {leadingTagsData.map((item, index) => (
          <LeadingCont key={index} image={item.image} text={item.text} />
        ))}
      </section>
      <div className="w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 -top-[300px] -left-[300px]" />
    </div>
  );
};

export default Leading;
