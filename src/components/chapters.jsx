/* eslint-disable no-unused-vars */
import React from "react";
import { ChaptersData } from "./chapterData";
import ChapterBlock from "./elements/ChapterBlock";

const Chapters = () => {
  return (
    <div
      id="chapters"
      className="px-auto w-screen top_padding body_padding flex items-center justify-center flex-col relative overflow-hidden"
    >
      {ChaptersData.map((item, index) => (
        <ChapterBlock
          key={index}
          title={item.title}
          text={item.text}
          text2={item.text2}
          chapter={item.chapter}
          hasCode={item.hasCode}
          islast={item.isLast}
          image={item.image}
          isLeft={item.isLeft}
        />
      ))}
       <div className="md:w-[600px] h-[600px] bg-yellow absolute rounded-full blur-[400px] bg-opacity-55 bottom-[300px] -right-[300px] overflow-hidden" />
    </div>
  );
};

export default Chapters;
