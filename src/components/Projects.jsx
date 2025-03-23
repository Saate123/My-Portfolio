import React from "react";
import Image from "../assets/logo.png";
import Image2 from "../assets/logo (2).png";
import Image3 from "../assets/Screenshot 2025-03-06 at 19.18.03 1.png";
import Image4 from "../assets/Vector.png"; 

function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="md:col-span-2 mb-12 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 ">
        {/* Project 1 */}
        <div
          className="bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          data-aos="zoom-out"
        >
          <img
            src={Image}
            alt="ADF"
            className="w-32 h-32 object-contain mb-4 transition-transform duration-500 hover:scale-150 hover:rotate-360"
          />

          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            AFRICA DIASPORA PROPERTIES LIMITED (ADF)
          </h3>
          <p className="text-gray-600 mb-4">
            Helping Africans in the Diaspora find their dream homes. From
            property listings to mortgage support, we make home ownership
            easier.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Status:</span> Hosted
          </p>
          <a
            href="https://adf-blue.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#59C4B7] w-44 text-white px-6 py-2 rounded-full hover:bg-[#48b0a3] transition"
          >
            View
          </a>
        </div>

        {/* Project 2 */}
        <div
          className="bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          data-aos="zoom-in"
        >
          <img
            src={Image2}
            alt="Fashionistar"
            className="w-32 h-32 object-contain mb-4 transition-transform duration-500 hover:scale-150 hover:rotate-360"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            FASHIONISTAR
          </h3>
          <p className="text-gray-600 mb-4">
            Discover stunning ready-to-wear clothes that portray your unique
            style and collaborate with talented designers.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Status:</span> Ongoing
          </p>
          <a
            href="https://fashionista-zw97.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#59C4B7] w-44 text-white px-6 py-2 rounded-full hover:bg-[#48b0a3] transition"
          >
            View
          </a>
        </div>

        {/* Project 3 */}
        <div
          className="bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          data-aos="zoom-out"
        >
          <img
            src={Image3}
            alt="TiCARE"
            className="w-32 h-32 object-contain mb-4 transition-transform duration-500 hover:scale-150 hover:rotate-360"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">TiCARE</h3>
          <p className="text-gray-600 mb-4">
            A healthtech solution providing fast and reliable ambulance services
            at the tap of a button — your safety is our priority.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Status:</span> Hosted
          </p>
          <a
            href="https://ti-care.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#59C4B7] w-44 text-white px-6 py-2 rounded-full hover:bg-[#48b0a3] transition"
          >
            View
          </a>
        </div>

        {/* Project 4 */}
        <div
          className="bg-white shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          data-aos="zoom-in"
        >
          <img
            src={Image4}
            alt="Pocketvoucher"
            className="w-32 h-32 object-contain mb-4 transition-transform duration-500 hover:scale-150 hover:rotate-360"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            POCKETVOUCHER
          </h3>
          <p className="text-gray-600 mb-4">
            Move, send, and receive money effortlessly across Africa, and pay
            tuition globally within a single, convenient platform.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Status:</span> Ongoing
          </p>
          <a
            href="https://pocket-voucher.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#59C4B7] w-44 text-white px-6 py-2 rounded-full hover:bg-[#48b0a3] transition"
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
