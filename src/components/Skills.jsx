import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function SoftSkills() {
  const softSkills = [
    "Teamwork & Collaboration",
    "Problem-Solving",
    "Attention to Detail",
    "Adaptability",
    "Strong Communication",
    "Time Management",
    "Creativity",
    "Continuous Learning",
  ];

  return (
    <section id="soft-skills" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
          data-aos="fade-up"
        >
          Soft Skills
        </h2>
        <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>
        <p
          className="text-center text-gray-600 mt-4 mb-10"
          data-aos="fade-down"
        >
          Beyond code — I thrive on creativity, communication, and the ability
          to adapt and collaborate with others to bring ideas to life.
        </p>

        <div className="grid gap-6 sm:grid-cols-2" data-aos="zoom-out">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-700 hover:text-[#42BBAC] transition-all duration-300"
            >
              <FaCheckCircle className="text-[#42BBAC]" size={20} />
              <span className="text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
