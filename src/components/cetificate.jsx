// import React from 'react'
import Img_5265 from "../assets/IMG_5265.jpg";
import Img_5266 from "../assets/IMG_5266.jpg";

const Certificate = () => {
  return (
    <div className="body_padding top_padding">
      <h3 className="text-title_moblie md:text-title mb-6">Certifcates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={Img_5265} alt="image 1" />
        <img src={Img_5266} alt="image 1" />
      </div>
    </div>
  );
};

export default Certificate;
