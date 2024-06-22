import React from "react";
import image from "../assets/dog_img.svg";
import { BiSolidUpArrow } from "react-icons/bi";

const boardData = [
  { image: image, text: "Dog 01", price: 5324, status: "Increased" },
  { image: image, text: "Dog 02", price: 5245, status: "Increased" },
  { image: image, text: "Dog 03", price: 4985, status: "Decreased" },
  { image: image, text: "Dog 04", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 05", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 06", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 07", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 08", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 09", price: 4585, status: "Decreased" },
  { image: image, text: "Dog 10", price: 4585, status: "Decreased" },
];

const ordinalSuffix = (index) => {
  if (index === 1) return "1st";
  if (index === 2) return "2nd";
  if (index === 3) return "3rd";
  return `${index}th`;
};

const BoardCont = ({ image, text, price, index, status }) => {
  const isTopThree = index <= 3;
  return (
    <div className="bg-gradient-to-tr from-pink-100 via-darkBlue to-purple-400 pb-[1px] text-[12px]">
      <div className="w-full bg-darkBlue flex items-center justify-between px-3 py-2">
        <article className="flex items-center gap-6">
          <div
            className={` h-[30px] w-[30px] flex items-center justify-center rounded-full ${
              isTopThree ? "bg-yellow text-darkBlue" : "bg-none text-white"
            }`}
          >
            <p>{ordinalSuffix(index)}</p>
          </div>
          <img src={image} alt={`Image of ${text}`} />
          <p>{text}</p>
        </article>
        <article className="flex items-center gap-2">
          <p>{price}</p>
          <BiSolidUpArrow className={`text-[10px] ${status === "Increased" ? "text-green-500" : "text-red-500 rotate-180"}`} />
        </article>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <div className="body_padding top_padding">
      <h3 className="text-white text-title_moblie md:text-title mb-8">Leadership Board</h3>
      <div>
        {boardData.map((item, index) => (
          <BoardCont
            key={index}
            index={index + 1}
            image={item.image}
            text={item.text}
            price={item.price}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
