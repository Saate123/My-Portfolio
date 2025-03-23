import React from "react";

function Services() {
  return (
    <div>
      <section id="services" className="p-8 bg-gray-50">
        <div className="md:col-span-2 mb-12 text-center" data-aos="zoom-out">
          <h2 className="text-4xl font-bold text-gray-800">Services I Offer</h2>
          <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6" data-aos="flip-down">
          <div className="bg-white p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Frontend Web Development
            </h3>
            <p>
              Building responsive, user-friendly websites and web applications
              using modern technologies. I turn design concepts into functional
              and interactive digital experiences.
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-up">
            <h3 className="text-xl font-semibold mb-2">UI Implementation</h3>
            <p>
              Converting Figma or Adobe XD designs into pixel-perfect web pages
              with clean and scalable code.
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-down">
            <h3 className="text-xl font-semibold mb-2">
              Website Maintenance & Updates
            </h3>
            <p>
              Providing continuous support, troubleshooting, bug fixes, and
              performance optimization for existing websites.
            </p>
          </div>
          <div className="bg-white p-6 shadow " data-aos="flip-up">
            <h3 className="text-xl font-semibold mb-2">
              Landing Page Development
            </h3>
            <p>
              Designing and developing clean, professional, and
              conversion-focused landing pages for businesses and brands.
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-down">
            <h3 className="text-xl font-semibold mb-2">
              Version Control Management
            </h3>
            <p>
              Setting up and managing collaborative workflows using Git and
              GitHub for effective project version control.
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-up">
            <h3 className="text-xl font-semibold mb-2">
              Basic Graphic & Document Design
            </h3>
            <p>
              Creating simple design materials and documents using CorelDRAW, MS
              Publisher, and Adobe PageMaker.
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-down">
            <h3 className="text-xl font-semibold mb-2">
              Microsoft Office Support
            </h3>
            <p>
              Offering assistance with document creation (MS Word), data
              handling (Excel), and professional presentations (PowerPoint).
            </p>
          </div>
          <div className="bg-white p-6 shadow" data-aos="flip-up">
            <h3 className="text-xl font-semibold mb-2">
              Basic Tech Support & Training
            </h3>
            <p>
              Helping beginners with computer basics, internet usage, digital
              literacy, and safe online practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
