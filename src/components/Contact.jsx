import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-50">
      <div className="md:col-span-2 mb-12 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact details */}
        <div className="flex flex-col gap-6">
          <div>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">
              Address
            </h5>
            <p className="text-gray-600 mb-2">
              5 Calvary Drive, Akpajo-Eleme, Rivers State
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:saateechindo@gmail.com"
                className="hover:text-blue-600 hover:underline"
              >
                saateechindo@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 bg-green-500 w-2xs justify-center py-2.5 border-white border-3 rounded-4xl">
            <BsWhatsapp className="text-white text-2xl" />
            <a
              href="https://wa.me/qr/OQSXQ7X6MEXIH1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg"
            >
              Chat Up on WhatsApp
            </a>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">
              Phone Number
            </h5>
            <p className="text-gray-600 text-lg">+2347056810512</p>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7814007808563!2d7.130844874064254!3d4.846838695063464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d061d73955d3%3A0x4216c47daec0e34c!2sAkpajo-Eleme%2C%20Rivers!5e0!3m2!1sen!2sng!4v1711014466697!5m2!1sen!2sng"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
