// import React from 'react'
import roadmap from "../assets/roadmap.svg";
import roadmap_mobile from "../assets/roadmap_mobile.svg";

const Roadmap = () => {
  return (
    <div className="body_padding top_padding">
      <section>
        <h2 className="text-title_moblie md:text-title">Roadmap</h2>
        <p className="text-text font-light">
          This roadmap outlines the key milestones and initiatives planned for
          Dev Inu as it continues to grow and evolve. The project is committed
          to transparency and community involvement, and all roadmap items are
          subject to change based on community feedback and market conditions.
        </p>
        <div className="mt-10 ">
          <img src={roadmap} alt="" className="hidden md:block mx-auto" />
          <img src={roadmap_mobile} alt="" className="block mx-auto md:hidden" />
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
