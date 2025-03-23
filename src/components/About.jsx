import React, { useState, useEffect } from "react";
import Image1 from "../assets/profile-img.jpg";
import Image2 from "../assets/hero-bg.jpg";

function About() {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git & GitHub", level: 70 },
  ];

  const slides = [
    {
      image: Image1,
      role: "Frontend Developer",
      text: `I am passionate about crafting user-friendly, responsive, and creative digital experiences. I enjoy turning ideas into reality through thoughtful design and purposeful functionality. Problem-solving and attention to detail are at the core of my work, and I am always eager to learn, grow, and push boundaries. Every project is an opportunity to build something meaningful — solutions that are clean, efficient, and built to last. I’m excited to collaborate, create, and contribute to projects that make a real difference. Let’s build something amazing together`,
    },
    {
      image: Image2,
      role: "My Technical Skills",
      text: `These are the tools and technologies I use to turn ideas into functional, responsive, and elegant web solutions.`,
      skills,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          About Me
        </h2>
        <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center gap-10"
              >
                <div className="w-full md:w-[40vw] max-w-md">
                  <img
                    src={slide.image}
                    alt="Profile Slide"
                    className="w-full h-auto object-cover shadow-xl"
                  />
                </div>
                <div className="text-center md:text-left flex-1 px-4">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    {slide.role}
                  </h3>
                  {index === 0 ? (
                    <>
                      <p className="text-gray-600 leading-relaxed">
                        {slide.text}
                      </p>
                      <ul className="mt-6 text-gray-700 space-y-2 text-left">
                        <li>
                          <span className="font-medium">City:</span> Port
                          Harcourt, Rivers State
                        </li>
                        <li>
                          <span className="font-medium">Phone:</span>{" "}
                          <a
                            href="tel:+2348021498512"
                            className=" hover:underline hover:text-[#42BBAC]"
                          >
                            +2348021498512
                          </a>
                        </li>
                        <li>
                          <span className="font-medium">Email:</span>{" "}
                          <a
                            href="mailto:saateechindo@gmail.com"
                            className=" hover:underline hover:text-[#42BBAC]"
                          >
                            saateechindo@gmail.com
                          </a>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {slide.text}
                      </p>
                      <div className="w-full">
                        {slide.skills.map((skill, i) => (
                          <div key={i} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700 font-medium">
                                {skill.name}
                              </span>
                              <span className="text-gray-500">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-1.5">
                              <div
                                className="bg-[#42BBAC] h-1.5 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
