import React, { useState, useEffect } from 'react';
import { projects } from '@/app/data/data';
import Link from 'next/link';

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial mouse position
    setMousePosition({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  const handleHover = (projectIndex) => () => {
    setHoveredProject(projectIndex);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  const updateMousePosition = (event) => {
    if (event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div className="items-center h-full justify-center flex flex-col bg-customDarkPurple w-full">
      {/* Div to trigger hover effect */}
      <h1 className=' font-bold text-7xl text-gray-400'>PROJECTS</h1>
            
      <div className="w-1200 mt-6 flex flex-col gap-3">
        {projects.map((project, index) => (
          <div key={index}>
            <Link href= {`/components/projectDetail?name=${project.name}&github=${project.links.github}&link=${project.links.playStore}&images=${encodeURIComponent(JSON.stringify(project.images))}`}>
            <div
              className="p-2 bg-gray-300 rounded-xl cursor-pointer"
              onMouseOver={handleHover(index)}
              onMouseMove={updateMousePosition}
              onMouseOut={handleMouseOut}
            >
              <h1 className=' font-bold text-sky-950 text-base'>{project.name}</h1>
            </div>
            </Link>

            {/* Sticky div */}
            {hoveredProject === index && (
             project.type == 'App' ?
             <div
                style ={
                  {
                  position: 'fixed',
                  top: mousePosition.y + 'px',
                  left: mousePosition.x + 10 + 'px',
                  backgroundImage: `url(${project.images[0]})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  height: '300px', // Adjust to your needs
                  width: '150px', // Adjust to your needs
                }
              }
                className="bg-gray-800 text-white rounded-lg border-gray-500 border-solid border-4"
              ></div>
              : 
              <div
              style ={
                {
                position: 'fixed',
                top: mousePosition.y + 'px',
                left: mousePosition.x + 10 + 'px',
                backgroundImage: `url(${project.images[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px', // Adjust to your needs
                width: '200px', // Adjust to your needs
              }
            }
              className='bg-white rounded-lg border-gray-500 border-solid border-4'>
                
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;
