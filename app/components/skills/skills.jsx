import React from 'react';
import Particles from 'react-particles-js';

const Skills = () => {
  const particleParams = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 3,
      },
      color: {
        value: '#FAF0E6', // Particle color on hover
      },
      line_linked: {
        color: '#FAF0E6', // Line color on hover
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };

  const skillsList = [
    'C',
    'C++',
    'Flutter (Dart)',
    'Tailwind',
    'React',
    'Next.js',
    'Express.js',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Firebase',
    'SQL',
    'MongoDB',
  ];

  return (
    <div style={{ position: 'relative', backgroundColor: '#352F44', height: '100vh' }}>
      <Particles params={particleParams} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      {skillsList.map((skill, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${Math.random() * 90}vh`, // Random position from top
            left: `${Math.random() * 90}vw`, // Random position from left
            color: '#FAF0E6',
            padding: '10px',
            borderRadius: '5px',
            border: '2px solid #FAF0E6',
            zIndex: 1,
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
