import React, { useState, useEffect } from 'react';
import { projects } from '@/app/data/data';

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
    <div className="items-center flex flex-col bg-customDarkPurple w-full">
      {/* Div to trigger hover effect */}
      <div className="w-1200 flex flex-col gap-3">
        {projects.map((project, index) => (
          <div key={index}>
            <div
              className="p-2 bg-gray-300 rounded-xl"
              onMouseOver={handleHover(index)}
              onMouseMove={updateMousePosition}
              onMouseOut={handleMouseOut}
            >
              <h1>{project.name}</h1>
            </div>

            {/* Sticky div */}
            {hoveredProject === index && (
              <div
                style={{
                  position: 'fixed',
                  top: mousePosition.y + 'px',
                  left: mousePosition.x + 10 + 'px',
                  backgroundImage: `url(${project.imgUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px', // Adjust to your needs
                  width: '200px', // Adjust to your needs
                }}
                className="bg-gray-800 text-white rounded-lg"
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
