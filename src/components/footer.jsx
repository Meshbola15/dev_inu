// import React from 'react'
import logo from "../assets/menu_logo.svg";

const footerLink = [
  { name: "Home", path: "/" },
  { name: "Chronicles", path: "#chronicles" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "FAQ", path: "#faq" },
];

const Footer = () => {
  return (
    <div>
      <section className="body_padding flex flex-col justify-between md:flex-row items-center md:justify-between mt-[100px] overflow-hidden">
        <img src={logo} alt="logo" className="w-14 h-14" />

        <section className="flex items-center gap-5 flex-row ">
          {footerLink.map((item, index) => (
            <a key={index} href={item.path}>
              {item.name}
            </a>
          ))}
        </section>
      </section>
      <hr className="border-none h-[1px] bg-yellow my-6" />
      <section className="body_padding pb-8 py-4 text-center text-text_grey ">
        <p>© 2024 Dev Inu | All rights reserved.</p>
      </section>
    </div>
  );
};

export default Footer;
