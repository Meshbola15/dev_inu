import { useState } from "react";
import logo from "../assets/menu_logo.svg";

const navLink = [
  { name: "Home", path: "#home" },
  { name: "Chronicles", path: "#chronicles" },
  { name: "Roadmap", path: "#roadmap" },
  { name: "Faq", path: "#faq" },
];

const barStyle = "w-[20px] h-[2px] bg-white my-[4px]";

const btn = () => (
  <button className="bg-yellow text-darkBlue px-5 py-2 rounded-lg">
    Trade Now
  </button>
);

const navComponent = () => (
  <>
    {navLink.map((item, index) => (
      <li key={index}>
        <a href={item.path}>{item.name}</a>
      </li>
    ))}
  </>
);

const MenuBar = ({ isOpen, setIsOpen }) => (
  <div
    onClick={() => setIsOpen(!isOpen)}
    className={`z-50 gap-y-1 block md:hidden`}
  >
    <div
      className={` ${barStyle} transition-transform duration-300 ${
        isOpen ? "translate-x-0 translate-y-[6px] -rotate-45" : ""
      }`}
    />
    <div
      className={` ${barStyle} transition-opacity duration-300 ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <div
      className={` ${barStyle} transition-transform duration-300 ${
        isOpen ? "translate-x-0 -translate-y-[6px] rotate-45" : ""
      }`}
    />
  </div>
);

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={` body_padding fixed top-0 w-full z-[200] ${isOpen ? "" : "glass"}`}>
        <section className="flex items-center justify-between z-[150] p-4 ">
          <a href="#home" className="z-[60]">
            <img src={logo} alt="" className="w-14 h-14  z-[60]" />
          </a>
          {/* desktop */}
          <div className="hidden md:block">
            <ul className="flex flex-row items-center text-white z-50 gap-4">
              {navComponent()}
              {btn()}
            </ul>
          </div>
          {/* mobile */}
          <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
      </div>
      <div
        className={`fixed z-[100] bg-darkBlue top-0 left-0 bottom-0 right-0 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <ul
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-screen  text-center gap-2 h-screen flex-col"
        >
          {navComponent()}
          {btn()}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
