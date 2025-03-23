import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      <div className="md:col-span-2 mb-12 text-center" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-gray-800">Resume</h2>
        <div className="w-15 h-1 bg-[#42BBAC] mx-auto mt-4"></div>
      </div>

      <div className="space-y-12">
        <div
          className="relative pl-8 border-l-4 border-[#42BBAC]"
          data-aos="fade-up"
        >
          <header className="text-2xl font-bold mb-4">Summary</header>
          <div>
            <h3 className="text-xl font-semibold">Echindo, E. Saate</h3>
            <p className="mt-2 text-gray-700">
              Motivated and detail-oriented Frontend Developer with hands-on
              experience collaborating with development teams to build
              responsive and user-friendly web solutions. Strong foundation in
              Quantity Surveying (B.Tech) and practical experience in
              translating ideas into functional digital products, with a focus
              on clean, scalable code and continuous learning.
            </p>
            <ul className="mt-4 text-gray-600 list-disc space-y-1">
              <li>Port Harcourt, Rivers State, Nigeria</li>
              <li>
                <a
                  href="tel:+2348021498512"
                  className="hover:text-[#42BBAC] hover:underline"
                >
                  +2348021498512
                </a>
              </li>
              <li>
                <a
                  href="mailto:saateechindo@gmail.com"
                  className="hover:text-[#42BBAC] hover:underline"
                >
                  saateechindo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="relative pl-8 border-l-4 border-[#42BBAC]"
          data-aos="fade-down"
        >
          <header className="text-2xl font-bold mb-4">
            Professional Experience
          </header>
          <div>
            <h3 className="text-xl font-semibold">Internship</h3>
            <h6 className="text-sm text-gray-500 mb-2">
              Nov., 2024 - Feb., 2025
            </h6>
            <h4 className="text-lg font-medium mb-2">
              Harvoxx Tech Hub, Port Harcourt, RS, Nigeria
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                Collaborated with the development team to build responsive and
                user-friendly web solutions.
              </li>
              <li>Learned and applied React.js in real-world projects.</li>
              <li>
                Translated design mockups into functional and interactive web
                interfaces.
              </li>
              <li>
                Wrote clean, efficient, and well-structured code following best
                practices.
              </li>
              <li>
                Participated in team meetings, brainstorming sessions, and
                project discussions.
              </li>
              <li>
                Gained experience with version control using Git and GitHub.
              </li>
              <li>
                Improved problem-solving skills and attention to detail through
                hands-on development tasks.
              </li>
              <li>
                Worked within an agile environment, adapting to dynamic project
                requirements and deadlines.
              </li>
              <li>
                Contributed to building tech solutions that align with user
                needs and business goals.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-12" data-aos="fade-up">
        <div className="relative pl-8 border-l-4 border-[#42BBAC]">
          <header className="text-2xl font-bold mb-4">
            Educational Background
          </header>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Frontend Development</h4>
            <h6 className="text-sm text-gray-500 mb-2">2024</h6>
            <h4 className="text-md font-medium mb-1">
              Harvoxx Tech Hub, Port Harcourt, RS, Nigeria
            </h4>
            <p className="text-gray-700">
              Completed intensive training in Frontend Development, focusing on
              HTML, CSS, JavaScript, GitHub, and React.js. Gained practical
              experience translating designs into functional interfaces through
              projects and collaborative learning.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Bachelor of Technology</h4>
            <h6 className="text-sm text-gray-500 mb-2">2019-2024</h6>
            <h4 className="text-md font-medium mb-1">
              Rivers State University, Port Harcourt, RS, Nigeria
            </h4>
            <p className="text-gray-700">
              Graduated with a B.Tech in Quantity Surveying. Acquired strong
              skills in project planning, cost estimation, BOQ preparation,
              construction technology, and building regulations.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">
              ICT Competence & Digital Lifestyle
            </h4>
            <h6 className="text-sm text-gray-500 mb-2">2021-2022</h6>
            <h4 className="text-md font-medium mb-1">
              Information Technology Academy, RSU, Port Harcourt, Nigeria
            </h4>
            <p className="text-gray-700">
              Trained in core ICT concepts including MS Office, computer
              networking, security, and data privacy, building digital
              confidence and productivity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Diploma in Desktop Publishing
            </h4>
            <h6 className="text-sm text-gray-500 mb-2">2013-2014</h6>
            <h4 className="text-md font-medium mb-1">
              Transdata Communication Technologies, Port Harcourt, Nigeria
            </h4>
            <p className="text-gray-700">
              Gained practical skills in desktop publishing software including
              CorelDRAW, MS Publisher, and Adobe PageMaker for digital content
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
