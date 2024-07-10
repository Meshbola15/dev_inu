import React, { useEffect, useState } from "react";
import dog_1st from "../assets/_frame_2.svg";
import dog_2nd from "../assets/_frame_1.svg";
import dog_3rd from "../assets/_frame_3.svg";
import { DogData } from "./DogData";
import axios from "axios";
import { backendLink } from "../../backend";

const LeadingCont = ({ image, text, onVote, isSelected }) => (
  <div
    onClick={onVote}
    className={`gradient px-[1px] py-[1px] rounded-lg md:rounded-2xl `}
  >
    <div
      className={`w-full bg-darkBlue flex flex-col items-center justify-center px-2 md:px-3 py-2 gap-2 md:gap-6 rounded-lg md:rounded-2xl cursor-pointer hover:bg-yellow ${
        isSelected ? "bg-yellow" : ""
      }`}
      onClick={onVote}
    >
      <img src={image} alt="Dog" className="w-[120px] md:w-[160px]" onClick={onVote} />
      <p className="mr-2 text-sm md:text-text md:mr-6" onClick={onVote}>{text}</p>
    </div>
  </div>
);

const LeadingContainer = ({ isFirst, position, image }) => (
  <div className={`w-full flex items-center justify-center`}>
    <section
      className={`${
        isFirst ? "bg-yellow" : "gradient"
      } px-[2px] py-[2px] w-fit rounded-2xl`}
    >
      <div className="relative flex items-center justify-center w-full">
        <img
          src={image}
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

const DesktopLeading = ({ isFirst, position, image, index }) => (
  <section
    className={`flex items-center justify-center relative ${
      isFirst ? "bg-yellow mb-4" : "gradient"
    } px-1 py-1 rounded-2xl`}
  >
    <div className="rounded-2xl w-fit">
      <img
        src={image}
        alt=""
        className={`${isFirst ? "w-[30vw]" : "w-[20vw]"} rounded-2xl`}
      />
      <div className="absolute bottom-[-30px] left-0 right-0 mx-auto self-center w-[60px] h-[60px] bg-yellow flex items-center justify-center px-3 py-2 rounded-full">
        <p className="text-[20px] text-darkBlue text-center">{position}</p>
      </div>
    </div>
  </section>
);

const Leading = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userVote, setUserVote] = useState(localStorage.getItem("userVote"));
  const [leadingContainerData, setLeadingContainerData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(userVote);

  const handleVote = async (newOption) => {
    try {
      if (userVote) {
        await axios.post(`${backendLink}/api/change-vote`, {
          previousOption: userVote,
          newOption,
        });
      } else {
        await axios.post(`${backendLink}/api/vote`, {
          option: newOption,
        });
      }
      localStorage.setItem("userVote", newOption);
      setUserVote(newOption);
      setSelectedItem(newOption);
      fetchVotes(); // Fetch updated data after voting
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  };

  const fetchVotes = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/votes`);
      const voteData = response.data;

      const updatedData = DogData.map((dog) => {
        const voteItem = voteData.find((vote) => vote.option === dog.text);
        return {
          ...dog,
          votes: voteItem ? voteItem.votes : 0,
        };
      });

      updatedData.sort((a, b) => b.votes - a.votes);

      const leadingData = updatedData.slice(0, 3).map((dog, index) => {
        let position = "3rd";
        let isFirst = false;
        if (index === 0) {
          position = "1st";
          isFirst = true;
        } else if (index === 1) {
          position = "2nd";
        }
        let image;
        if (index === 0) {
          image = dog_1st;
        } else if (index === 1) {
          image = dog_2nd;
        } else {
          image = dog_3rd;
        }
        return { ...dog, position, isFirst, image };
      });

      setLeadingContainerData(leadingData);
      console.log(leadingContainerData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchVotes();

    const interval = setInterval(() => {
      setScrollPosition((prevPosition) =>
        prevPosition === leadingContainerData.length - 1 ? 0 : prevPosition + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [leadingContainerData.length]);

  return (
    <div className="relative body_padding top_padding my-10 w-full overflow-hidden">
      <div className="block md:hidden">
        <section
          className="flex items-center transition-transform duration-500"
          style={{ transform: `translateX(-${scrollPosition * 100}%)` }}
        >
          {leadingContainerData.map((item, index) => (
            <div key={index} className="w-full flex flex-shrink-0">
              <LeadingContainer
                isFirst={item.isFirst}
                position={item.position}
                image={item.image}
              />
            </div>
          ))}
        </section>
      </div>

      <div className="hidden md:flex items-end gap-4 justify-center">
        {/* {leadingContainerData.map((item, index) => (
          <div key={index}>
         
          </div>
        ))} */}
        <DesktopLeading
          position={leadingContainerData[1]?.position}
          image={leadingContainerData[1]?.image}
          isFirst={false}
        />
        <DesktopLeading
          position={leadingContainerData[0]?.position}
          image={leadingContainerData[0]?.image}
          isFirst={true}
        />
        <DesktopLeading
          position={leadingContainerData[2]?.position}
          image={leadingContainerData[2]?.image}
          isFirst={false}
        />
      </div>

      <section className="flex items-center justify-center gap-3 md:gap-6 flex-wrap mt-9">
        {DogData.map((item, index) => (
          <LeadingCont
            key={index}
            image={item.image}
            text={item.text}
            onVote={() => handleVote(item.text)}
            isSelected={selectedItem === item.text}
          />
        ))}
      </section>
      <div className="w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 -top-[300px] -left-[300px]" />
    </div>
  );
};

export default Leading;
