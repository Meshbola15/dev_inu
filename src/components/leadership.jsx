import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import { backendLink } from "../../backend";
import { DogData } from "./DogData";

// Predefined DogData

const ordinalSuffix = (index) => {
  if (index === 1) return "1st";
  if (index === 2) return "2nd";
  if (index === 3) return "3rd";
  return `${index}th`;
};

const BoardCont = ({ image, text, votes, index, status }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isTopThree = index <= 3;

  return (
    <div
      ref={ref}
      // className={`gradient pb-[1px] text-[12px] transition-opacity duration-1000 ${
      //   inView
      //     ? "opacity-100 translate-y-0"
      //     : "opacity-0 translate-y-10 cursor-pointer"
      // }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="w-full bg-darkBlue flex items-center justify-between px-3 py-2">
        <article className="flex items-center gap-6">
          <div
            className={`h-[30px] w-[30px] flex items-center justify-center rounded-full ${
              isTopThree ? "bg-yellow text-darkBlue" : "bg-none text-white"
            }`}
          >
            <p>{ordinalSuffix(index)}</p>
          </div>
          <img src={image} alt={`Image of ${text}`} />
          <p>{text}</p>
        </article>
        <article className="flex items-center gap-2">
          <p>{votes}</p>
          <BiSolidUpArrow
            className={`text-[10px] ${
              status === "Increased"
                ? "text-green-500"
                : "text-red-500 rotate-180"
            }`}
          />
        </article>
      </div>
    </div>
  );
};

const Leadership = () => {
  const [data, setData] = useState([]);
  const [previousData, setPreviousData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendLink}/api/votes`);
        const voteData = response.data;

        // Map the vote data to the DogData, assuming votes option matches text
        const updatedData = DogData.map((dog) => {
          const voteItem = voteData.find((vote) => vote.option === dog.text);
          return {
            ...dog,
            votes: voteItem ? voteItem.votes : 0,
          };
        });

        // Sort data by votes in descending order
        updatedData.sort((a, b) => b.votes - a.votes);

        // Determine the status based on previous votes
        const finalData = updatedData.map((dog, index) => {
          const previousVotes =
            previousData.find((item) => item.text === dog.text)?.votes || 0;
          const status = dog.votes >= previousVotes ? "Increased" : "Decreased";
          return { ...dog, status };
        });

        setPreviousData(updatedData); // Save current votes as previous for the next fetch
        setData(finalData); // Update state with final data including status
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]); // Re-fetch data whenever `data` changes

  return (
    <div className="body_padding top_padding">
      <h3 className="text-white text-title_moblie md:text-title mb-8">
        Leadership Board
      </h3>
      <div>
        {data.map((item, index) => (
          <BoardCont
            key={index}
            index={index + 1}
            image={item.image}
            text={item.text}
            votes={item.votes}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
