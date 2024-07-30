// Experience.js
import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className=" bg-customDarkPurple flex flex-col  w-full items-center">
      <div className=" mainDiv flex flex-col items-center bg-customCream w-full">
        <h1 className=" pt-10 font-bold text-7xl text-gray-600">EXPERIENCES</h1>
        <div className="timeline m-0 w-1200">
          <div className="container left-container">
            <img src="/assets/logo1.jpg" />
            <div className="text-box">
              <h2>Pina Systems</h2>
              <small>May 2021-october 2021</small>
              <p>
                Build frontend and backend and added features like Login,
                Search, Chart and Dashboard, worked on REST API, Flutter (Dart).
                Fixed few bugs in app.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src="/assets/logo2.jpg" />
            <div className="text-box">
              <h2>Department of Information Technology & Communication</h2>
              <small>July 2022-December 2022</small>
              <p>
                Developed an application to provide funding to startups by
                government of Rajasthan. Worked on technology like Flutter, Dart
                build frontend and backend using API.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container">
            <img src="/assets/logo3.png" />
            <div className="text-box">
              <h2>Doctunes</h2>
              <small>July 2023-August 2023</small>
              <p>
                Utilized Flutter (Dart), Firebase, and REST API.Enabled web
                scraping in Flutter using HTTP and HTML and Integrated Google
                Drive API for document retrieval.Designed UI for Forgot Password
                and Google Drive. Getting traffic of 85k per month which boost
                company overall revenue by 40%.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src="/assets/logo4.jpg" />
            <div className="text-box">
              <h2>Phone Panchayat</h2>
              <small>August 2023-December 2023</small>
              <p>
                Lead developer of Phone Panchayat app using Flutter with a
                microservices-based backend.Achieving 300,000+ downloads, a 30%
                user increase post-update, and winning the Rajasthan Social
                Impact Champion Award.Used technologies such as Flutter, AWS,
                Lamda functions, Dynamo db, REST API.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container">
          <img src="/assets/kreatr.png" />
            <div className="text-box">
              <h2>The Kreatr</h2>
              <small>March 2024 - Present</small>
              <p>
              In my role as a Full Stack Developer, I lead project development and manage technical infrastructure to ensure seamless operations and high-quality results. I directed the creation of a LinkedIn-like platform for designers using Next.js, Express.js, DynamoDB, and Node.js. Additionally, I developed and maintained responsive websites with modern technologies, designed robust backend systems including RESTful APIs and authentication, and launched cross-platform mobile apps with Flutter. I also mentor an intern, overseeing their tasks and professional development while collaborating effectively with team members to achieve project goals.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/creamWave.svg" alt="" />
    </div>
  );
};

export default Experience;
