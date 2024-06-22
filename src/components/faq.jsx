// import React from 'react'

import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const FaqList = [
  {
    question: "What is Dev Inu?",
    answer:
      "Dev Inu is a cryptocurrency project that aims to recognize and celebrate developers in the crypto ecosystem. It is built on the principles of transparency, community engagement, and innovation.",
  },
  {
    question: "What is the DEV token?",
    answer:
      "The DEV token is the native cryptocurrency of the Dev Inu ecosystem. It is used for transactions, governance, and rewards within the platform.",
  },
  {
    question: "How can I buy DEV tokens?",
    answer:
      "You can buy DEV tokens on decentralized exchanges (DEXs) where it is listed. Please refer to our website and social media channels for the latest information on where to buy DEV tokens.",
  },
  {
    question: "How can I participate in NFT giveaways?",
    answer:
      "To participate in NFT giveaways, you need to hold DEV tokens. Details on how to participate will be announced on our website and social media channels.",
  },
  {
    question: "How is Dev Inu different from other crypto projects?",
    answer:
      "Dev Inu is unique in its focus on recognizing and supporting developers. We aim to create a community-driven platform that rewards and celebrates the contributions of developers in the crypto space.",
  },
  {
    question: "What are the future plans for Dev Inu?",
    answer:
      "Our future plans include expanding our ecosystem, introducing new utilities for DEV tokens, and launching charity initiatives. We are committed to continuous development and improvement of the Dev Inu project.",
  },
  {
    question: "How can I get involved with Dev Inu?",
    answer:
      "You can get involved with Dev Inu by joining our community on social media, participating in discussions, and supporting the project. Your feedback and ideas are always welcome as we work together to build a thriving ecosystem for developers.",
  },
];

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-darkBlue p-4 select-none border-b-[0.1px] border-yellow border-opacity-30">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
        role="button"
        aria-expanded={isOpen}
      >
        <h3 className="text-white text-[20px] md:text-[24px] lg:text-[32px] w-[70%]">{question}</h3>
        <AiFillPlusCircle
        onClick={() => setIsOpen(!isOpen)}
          className={`text-yellow text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {isOpen && <p className="text-[12px] md:text-text font-light mt-2">{answer}</p>}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="body_padding top_padding relative">
      <h2 className="text-center text-title_moblie md:text-title">Dev Inu FAQs</h2>
      {FaqList.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
        <div className="w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[600px] bg-opacity-55 -bottom-[300px] -right-[300px]" />
    </section>
  );
};

export default Faq;
