import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { BsCheckCircleFill } from "react-icons/bs"; 
import emailjs from "emailjs-com";


function Form() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show popup on form submit
    setShowPopup(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 2000);

    emailjs
      .sendForm(
        "service_vxjyv3d", // replace with your service ID
        "template_4mxvckp", // replace with your template ID
        e.target, // this grabs the form data
        "m7jYmtTtxRHAq2qxA" // replace with your public key
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setShowPopup(true); // show your success message
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        alert("Something went wrong! Please try again.");
      });

    e.target.reset();
  };

  const formRef = useRef();

  return (
    <div>
      <Header />
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          YOUR REQUEST
        </h2>

        <div className="relative max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input your full name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C4B7]"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input your email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C4B7]"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="contact"
                className="mb-2 font-semibold text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Input your phone number"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C4B7]"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="request"
                className="mb-2 font-semibold text-gray-700"
              >
                Job Description
              </label>
              <textarea
                id="request"
                name="request"
                placeholder="Write your request here..."
                rows="5"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C4B7] resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#59C4B7] hover:bg-[#48b0a3] text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>

          {/* Updated Popup with icon and custom message */}
          {showPopup && (
            <div className="absolute inset-0 bg-white flex items-center justify-center rounded-lg z-20">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <BsCheckCircleFill size={60} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Your Request Has Been Sent Successfully
                </h3>
                <p className="text-gray-600">Please check your email.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Form;
