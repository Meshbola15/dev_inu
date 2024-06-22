// import React from 'react'
import logo from "../assets/footer_logo.svg";

const footerLink = [
  { name: "Home", path: "/" },
  { name: "Chronicles", path: "#chronicles" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "FAQ", path: "#faq" },
];

const Footer = () => {
  return (
    <div>
      <section className="body_padding flex flex-row justify-between items-start md:flex-row  md:items-center md:justify-between mt-[100px]">
        <img src={logo} alt="logo" />

        <section className="flex items-end md:items-center gap-5 flex-col md:flex-row ">
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
