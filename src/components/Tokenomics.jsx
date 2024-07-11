import React from "react";
import pie_chart from "../assets/pie_chart.svg";
import TokenomicsContainer from "./elements/TokenomicsContainer";

const TokenomicsData = [
  {
    title: "60% Fair Launch",
    content: "60% fair launch of DEV",
    numberOfTokens: "600,000,000",
    left_color: "#394a6a",
  },
  {
    title: "43% Liquidity Pool",
    content: "43% of the fair launch supply locked for 3 years",
    numberOfTokens: "430,000,000",
    left_color: "#21201E",
  },
  {
    title: "REMAINING FAIR LAUNCH TOKENS",
    content:
      "17% Locked with vesting periods for NFTs market, development, and marketing",
    numberOfTokens: "170,000,000",
    left_color: "#FFC600",
  },
  {
    title: "8% BUYBACK ALLOCATION",
    content: "8% of the fair launch supply.",
    numberOfTokens: "80,000,000",
    left_color: "#41262D",
  },
  {
    title: "2% TRANSACTION FEES",
    content: "2% on all buy and sell transactions to support the project",
    numberOfTokens: "20,000,000",
    left_color: "#265805",
  },
];

const Tokenomics = () => {
  return (
    <div className="body_padding top_padding">
      <h2 className="text-[32px] md:text-title">Tokenomics</h2>
      <section className="w-full flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-between top_padding">
        <img src={pie_chart} alt="pie chart" className="w-full md:w-[40vw]" />
        <div className="space-y-4">
          {TokenomicsData.map((item, index) => (
            <TokenomicsContainer
              key={index}
              title={item.title}
              content={item.content}
              numberOfTokens={item.numberOfTokens}
              left_color={item.left_color}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;