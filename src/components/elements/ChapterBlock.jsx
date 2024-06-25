import React from "react";
import { BiCopyAlt } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const ChapterBlock = ({
  title,
  text,
  text2,
  chapter,
  hasCode = false,
  image,
  isLeft,
  islast,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`w-full flex ${
        isLeft
          ? "flex-row md:self-start md:pr-20"
          : "flex-row-reverse md:self-end md:pl-20"
      } items-start transition-opacity duration-1000  ${
        inView ? "opacity-100 " : "opacity-0"
      }`}
    >
      <section
        className={`flex flex-row items-center w-full ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <section className="w-full h-fit gradient px-[1px] py-[1px] rounded-2xl">
          <section className="flex w-full h-[120px] md:h-[200px] justify-center flex-col border bg-darkBlue px-4 md:px-8 rounded-2xl">
            <h3 className="text-yellow text-[12px] leading-none md:leading-snug md:text-[calc(20px - 5vw)] font-bold mb-[2px] md:mb-1">
              {chapter}
            </h3>
            <p className="text-[9px] md:text-text text-gray-200 mb-[2px] md:mb-1">
              {title}
            </p>
            <p className="text-[7px] md:text-xs text-gray-300">{text}</p>
            {hasCode && (
              <div className="hidden md:block">
                <article className="flex flex-col my-1 md:my-2 w-3/4 rounded-lg text-gray-500 text-[7px] md:text-xs">
                  <div className="flex items-center justify-between bg-[#CAD5DE] px-2 py-[2px] md:py-1 rounded-t-lg">
                    <p>Javascript</p>
                    <BiCopyAlt />
                  </div>
                  <div className="bg-[#EAEFF2] rounded-b-lg py-[2px] px-2 md:py-1">
                    <p>
                      console.log(
                      <span className="text-orange-500">
                        "Hello World, I'm Dev Inu"
                      </span>
                      );
                    </p>
                  </div>
                </article>
                <p className="text-[8px] md:text-xs text-gray-300">{text2}</p>
              </div>
            )}
          </section>
        </section>
        {!islast && <div className="w-[15px] md:w-[40px] h-[2px] bg-yellow" />}
      </section>
      {!islast && (
        <>
         
          <section className="flex flex-col items-center justify-center">
            <div className="h-[120px] w-[120px] md:h-[200px] md:w-[200px] m-0 p-0">
              <img src={image} alt="" />
            </div>
            <div className="w-0.5 bg-yellow h-[15px] md:h-[35px]" />
          </section>
        </>
      )}
    </div>
  );
};

export default ChapterBlock;
