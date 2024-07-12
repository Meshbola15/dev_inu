// import React from 'react'
import logo from "../assets/dev_inu.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLink = [
  { name: "Home", path: "/" },
  { name: "Chronicles", path: "#chronicles" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "FAQ", path: "#faq" },
];
const socialIcon = [
  { icon: <FaTelegramPlane />, path: "https://t.me/devinutoken" },
  { icon: <FaXTwitter />, path: "https://x.com/devinutoken" },
];

const Footer = () => {
  return (
    <div className="z-[100]">
      <section className="body_padding flex flex-col justify-between md:flex-row items-center md:justify-between mt-[100px] overflow-hidden">
        <img src={logo} alt="logo" className="w-14 h-14" />

        <section className="flex items-center gap-5 flex-row flex-wrap md:flex-nowrap justify-center z-[100]">
          {footerLink.map((item, index) => (
            <a key={index} href={item.path} className="cursor-pointer z-[100]">
              {item.name}
            </a>
          ))}
          {socialIcon.map((item, index) => (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              {item.icon}
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
