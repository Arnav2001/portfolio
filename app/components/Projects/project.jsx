import React, { useEffect, useRef } from "react";
import './ParallaxTiltStyle.css';
import AnimatedHeaderClose from "@/app/textAnimation/animatedHeaderClose";
import AnimatedHeaderOpen from "@/app/textAnimation/animatedHeaderOpen";
const Project = () => {
  const tiltRef = useRef();

  useEffect(() => {
    const vanillaTilt = require('vanilla-tilt');
    vanillaTilt.init(tiltRef.current, {
      glare: true,
      "max-glare": 0.8,
      scale: 1.1,
    });
  }, []);
  const originalText = "Projects";
  return (
    <div className="bg-customDarkPurple flex h-full w-full p-4">
        <div className='flex flex-col'>
        <AnimatedHeaderOpen originalText={originalText} />
        <div className="flex-1 bg-customCream w-1" />
        <AnimatedHeaderClose originalText={originalText} />
      </div>
      <div className="outer" ref={tiltRef}>
        <div className="inner">
          <h1>
            Arnav Kulshrestha
          </h1>
          <hr/>
          <p>
            Full Stack developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
