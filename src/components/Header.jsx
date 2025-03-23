import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "../assets/Black & Grey Elegant Typography Monogram Initials Logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const dataList = [
    { list: "Home" },
    { list: "About" },
    { list: "Resume" },
    { list: "Services" },
    { list: "Projects" },
    { list: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = dataList.map((data) =>
        document.getElementById(data.list.toLowerCase())
      );
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActivePage(dataList[index].list);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="bg-[#F2F2F2] sticky py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50 shadow-md overflow-hidden">
        <div className="ml-8">
          <a href="/">
            <img
              src={Image}
              alt="Logo"
              className="h-16 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 mr-12">
          {dataList.map((data, index) => (
            <a
              key={index}
              href={`#${data.list.toLowerCase()}`}
              onClick={() => setActivePage(data.list)}
              className={`relative transition-all duration-300 ${
                activePage === data.list
                  ? "text-[#42BBAC]"
                  : "text-gray-500 hover:text-[#42BBAC]"
              } before:content-[''] before:absolute before:bottom-0 before:left-0 
              before:w-0 before:h-[2px] before:bg-[#42BBAC] before:transition-all before:duration-300
              hover:before:w-5`}
            >
              {data.list}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>

      {menuOpen && (
        <div className="sticky z-50 top-16 left-0 w-full bg-[#F2F2F2] text-center flex flex-col space-y-4 py-6 md:hidden">
          {dataList.map((data, index) => (
            <a
              key={index}
              href={`#${data.list.toLowerCase()}`}
              onClick={() => {
                setActivePage(data.list);
                setMenuOpen(false);
              }}
              className={`relative text-lg transition-all duration-300 ${
                activePage === data.list
                  ? "text-[#F2F2F2] bg-[#42BBAC] px-3 py-1 rounded-md"
                  : "text-gray-500 hover:text-[#42BBAC]"
              } before:content-[''] before:absolute before:bottom-0 before:left-0 
              before:w-0 before:h-[2px] before:bg-[#42BBAC] before:transition-all before:duration-300
              hover:before:w-full`}
            >
              {data.list}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
