import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-gray-600 py-6 text-center">
      {/* Copyright Text */}
      <p className="text-sm md:text-base">
        © Copyright <span className="font-semibold text-[#42BBAC]">Saate</span>{" "}
        All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        {[
          {
            href: "https://web.facebook.com/saate.daniel.3",
            icon: <FiFacebook />,
          },
          {
            href: "https://www.instagram.com/saate_echindo/",
            icon: <IoLogoInstagram />,
          },
          {
            href: "https://www.linkedin.com/in/saate-echindo-3210a1258/",
            icon: <SlSocialLinkedin />,
          },
          { href: "https://x.com/EchindoSaa13018", icon: <RiTwitterXLine /> },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border-2 border-gray-600 rounded-full text-gray-600
                       transition-all duration-300 hover:text-[#42BBAC] hover:border-[#42BBAC]"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
