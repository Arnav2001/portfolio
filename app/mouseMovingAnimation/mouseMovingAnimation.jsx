import React, { useState, useEffect } from 'react';
import './MouseTracker.css'; // Import the CSS file

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`cursor-follower ${isHovered ? 'expanded' : ''}`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="content z-9000" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <p>I am a developer</p>
      </div>
    </div>
  );
};

export default CursorFollower;
