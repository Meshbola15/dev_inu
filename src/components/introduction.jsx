import React from "react";

const Introduction = () => {
  const titleStyle = "text-[20px] md:text-[28px] mb-1 mt-4";
  const textStyle = "text-text_grey font-light text-[12px] md:text-[16px]";
  const listItemStyle = "list-item text-text_grey inline-block mb-2 text-[11px] md:text-[14px] font-light";
  const listHeader = "font-bold mr-1";

  return (
    <div className="body_padding top_padding">
      <h2 className="text-title_moblie md:text-title leading-none">Introduction</h2>
      <section>
        <h3 className={titleStyle}>Welcome to Dev Inu</h3>
        <p className={textStyle}>
          Dev Inu is a unique meme coin project on the Binance Smart Chain (BSC)
          that combines the fun and community spirit of meme coins with a deep
          appreciation for the developers who power the crypto world. Our
          project not only aims to bring joy and engagement to the community but
          also to recognize and celebrate the contributions of developers.
        </p>

        <h3 className={titleStyle}>About Dev Inu</h3>
        <p className={textStyle}>
          Dev Inu is inspired by the original Shiba Inu meme coin but with a
          twist that highlights the importance of developers. Our Shiba Inu
          character, the Dev Inu, represents the hardworking and innovative
          spirit of developers in the crypto ecosystem.
        </p>

        <h3 className={`${titleStyle} mb-2`}>Utilities</h3>
        <ul className="list-disc ml-5">
          <li className={listItemStyle}>
            <h4 className={listHeader}>NFT Collection:</h4>
            <span>
              “Dev Inu Pixels” featuring 1,000 unique pixel art NFTs of the Dev
              Inu Shiba Inu dog in various office setups.
            </span>
          </li>
          <li className={listItemStyle}>
            <h4 className={listHeader}>Voting System for NFTs:</h4>
            <span>
              Weekly voting, and the most voted NFT will be given away as a
              raffle prize to one of the voters.
            </span>
          </li>
          <li className={listItemStyle}>
            <h4 className={listHeader}>Merchandise Store:</h4>
            <span>
              Offering mugs, shirts, hats, magnets, and more. Each purchase
              includes a free sticker.
            </span>
          </li>
          <li className={listItemStyle}>
            <h4 className={listHeader}>Minting Website:</h4>
            <span>
              Users can mint their own NFTs on our dedicated platform, coming
              soon!
            </span>
          </li>
          <li className={listItemStyle}>
            <h4 className={listHeader}>Community Recognition:</h4>
            <span>Highlighting the contributions of crypto developers.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
