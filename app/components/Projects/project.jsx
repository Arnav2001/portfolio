import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/app/data/data';

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const handleHover = (projectIndex) => () => {
    setHoveredProject(projectIndex);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  return (
    <div className="items-center h-full justify-center flex flex-col bg-customDarkPurple w-full">
      <h1 className='font-bold text-7xl text-gray-400'>PROJECTS</h1>
      
      <div className="w-full max-w-screen-xl mt-6 flex flex-col gap-3">
        {projects.map((project, index) => (
          <div key={index}>
            <Link href={`components/projectDetail/${String(index)}`}>
                <div
                  className="p-2 bg-gray-300 rounded-xl cursor-pointer"
                  onMouseOver={handleHover(index)}
                  onMouseOut={handleMouseOut}
                >
                  <h1 className='font-bold text-sky-950 text-base'>{project.name}</h1>
                </div>
            </Link>
            
            {hoveredProject === index && (
              <div
                style={{
                  position: 'fixed',
                  top: mousePosition.y + 10 + 'px',
                  left: mousePosition.x + 10 + 'px',
                  backgroundImage: `url(${project.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: project.type === 'App' ? '300px' : '200px',
                  width: project.type === 'App' ? '150px' : '200px',
                }}
                className='bg-white rounded-lg border-gray-500 border-solid border-4'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
