import React from "react";
import Bg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <div
      className="relative h-screen w-full max-w-screen overflow-x-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-20 bg-cover bg-center"
      id="home"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Text Content */}
      <div className="relative z-10 max-w-4xl text-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Echindo E. Saate
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          I am a Frontend Developer from Nigeria
        </p>
        <div>
          {/* <a href="#about">
            <button className="mt-6 w-40 px-10 py-2 rounded-full text-white font-semibold shadow-lg bg-[#59C4B7] hover:bg-white hover:scale-105 hover:text-[#48b0a3] transition duration-300 mr-5">
              About Me
            </button>
          </a> */}
          <a href="/form">
            <button className="mt-6 w-40 px-10 py-2 rounded-full text-gray-800 font-semibold shadow-lg border-4 border-gray-400 hover:bg-[#48b0a3] hover:border-none hover:scale-105 hover:text-white transition duration-300">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
