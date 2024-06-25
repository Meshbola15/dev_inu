/* eslint-disable no-unused-vars */
import React from "react";
import { ChaptersData } from "./chapterData";
import ChapterBlock from "./elements/ChapterBlock";

const Chapters = () => {
  return (
    <div
      id="chronicles"
      className="px-auto w-screen top_padding body_padding flex items-center justify-center flex-col"
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
    </div>
  );
};

export default Chapters;
