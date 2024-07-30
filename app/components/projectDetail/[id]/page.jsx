"use client";
import React, { useState, useEffect } from "react";
import { projects } from "@/app/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../ImageSlider/Carousel";

import { useParams } from "next/navigation";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(projects[id]);
    console.log(projects[id]);
    console.log(id);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="bg-gradient-to-b from-customDarkPurple to-customCream overflow-y-scroll h-full w-full flex items-center">
          <div className="w-[35%] h-[90%] rounded-md ml-5">
            <div className="text-customCream font-bold w-[40%] h-[10%] text-7xl rotate-[-90deg] mt-20">
              {projects[id].firstname}
            </div>
            <div className="bg-customDarkPurple w-[60%] h-[65%] mt-28 ml-40 rounded-md">
              <div
                style={{ backgroundImage: `url("/assets/file.png")` }}
                className="w-[100%] bg-cover bg-center -translate-x-8 -translate-y-8 h-[100%] flex relative"
              >
                <div className="w-[90%] h-[90%] bg-white absolute ml-4 mt-5 overflow-auto">
                  <Carousel images={projects[id].imagesdata} />
                </div>
                <div className="bg-customDarkPurple -translate-x-10 translate-y-10 w-[30%] h-[10%] rounded-md z-10 absolute" />
              </div>
            </div>
          </div>
          <div className="text-customCream font-bold w-[18%] h-[10%] text-7xl rotate-[-90deg]">
            {projects[id].lastname}
          </div>
          <div className="w-[40%] h-[90%] ">
            <div className="w-[100%] h-[50%] bg-customPurple flex relative flex-col p-4">
              <div className="text-black font-bold w-[30%] h-[20%] text-5xl ml-20">
                ABOUT
              </div>
              <div className="w-[95%] h-[100%] bg-white bg-opacity-20 border border-white border-opacity-30 shadow-lg rounded-xl p-4 text-black absolute mt-16 font-pt-mono backdrop-filter backdrop-blur-lg overflow-y-auto">
                <h1 className="text-xl font-bold mb-1">{projects.title}</h1>
                <p>{projects[id].longDescription}</p>
                <h2 className="mt-1 font-semibold">Key Features</h2>
                <ul className="list-disc list-inside mt-1">
                  {projects[id].keyfeatures && projects[id].keyfeatures.length > 0 ? (
                    projects[id].keyfeatures.map((feature, index) => (
                      <li key={index}>
                        <strong>{feature}</strong>
                      </li>
                    ))
                  ) : (
                    <li>No key features available</li>
                  )}
                </ul>
              </div>

              <div className="w-[20%] h-[15%] bg-customCream -translate-x-20 translate-y-2 absolute"></div>
            </div>
            <div className="w-[100%] h-[50%] flex">
              <div className="w-[50%] h-[100%] flex justify-center items-center flex-col gap-4 border border-black rounded-b-lg">
                {projects[id].technologies && projects[id].technologies.length > 0 ? (
                  projects[id].technologies.map((tech, index) => (
                    <p key={index} className="font-bold text-3xl font-pt-mono">
                      {tech}
                    </p>
                  ))
                ) : (
                  <p>No technologies listed</p>
                )}
              </div>
              <div className="w-[50%] h-[50%] bg-customPurple flex justify-end ">
                <div className="w-[40%] h-[25%] bg-customCream mt-20 translate-x-14 translate-y-5"></div>
              </div>
            </div>
          </div>
          <div className="w-[2.5%] h-[90%] flex flex-col ">
            <div className="w-[90%] h-[5%] rounded-full bg-customCream ml-3 mt-[20%]">
            <a href={projects[id].github}>
              <img src="/assets/github.svg" alt="github" className='w-8 cursor-pointer shadow-md shadow-white bg-customCream rounded-full'/>
            </a>
            </div>
            <div className="w-[90%] h-[5%] rounded-full bg-customCream ml-3 mt-[20%]">
            <a href={projects[id].live}>
              <img src="/assets/link.svg" alt="github" className='w-8 cursor-pointer shadow-md shadow-white bg-customCream rounded-full'/>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ProjectDetail;
