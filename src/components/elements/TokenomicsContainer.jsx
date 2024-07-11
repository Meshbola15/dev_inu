import React from "react";

const TokenomicsContainer = ({
  title,
  content,
  numberOfTokens,
  left_color,
}) => {
  const textStyle =
    "text-[#D8CDDC] text-[12px] md:text-[16px] font-thin font-[300] ";
  const titleStyle = "text-[16px] md:text-[24px] md:text-text uppercase";

  return (
    <div
      className="w-full md:w-[40vw] bg-white bg-opacity-10 rounded-md"
      style={{ borderLeft: `6px solid ${left_color}` }}
    >
      <div className="flex items-center justify-between py-2 px-4 md:py-3 md:px-6 space-x-12 ">
        <section className="text-left space-y-2">
          <h3 className={titleStyle}>{title}</h3>
          <p className={textStyle}>{content}</p>
        </section>

        <section className="text-right space-y-2 ">
          <h3 className={titleStyle}>Tokens</h3>
          <p className={textStyle}>{numberOfTokens}</p>
        </section>
      </div>
    </div>
  );
};

export default TokenomicsContainer;
