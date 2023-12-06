import AnimatedHeaderOpen from '../../textAnimation/animatedHeaderOpen';
import AnimatedHeaderClose from '../../textAnimation/animatedHeaderClose';
import React, { useEffect, useRef } from "react";
import './about.css'
const About = () => {
  const originalText = 'ABOUT';
  const tiltRef = useRef();

  useEffect(() => {
    const vanillaTilt = require('vanilla-tilt');
    vanillaTilt.init(tiltRef.current, {
      scale: 1.1,
    });
  }, []);
  return (
    <div className='bg-customDarkPurple flex h-full w-full p-4'>
    
      <div className='w-full p-2 flex justify-center items-center'>
        
        <div className='w-550 flex flex-col mr-6'>
          <h1 className='font-bold text-30 text-cyan-100'>Hi, I'm Arnav Kulshrestha</h1>
          <h2 className='text-xl text-blue-200 font-normal'>Software Developer</h2>
          <p className='mt-4 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus cumque animi voluptatibus dicta assumenda magni qui, quos tempore! Beatae accusamus culpa labore fugit deleniti nihil nulla hic ducimus error.</p>
          <div className=" bg-customCream mt-4 hover:bg-customDarkPurple hover:text-customCream hover:border-customCream flex text-customDarkPurple w-fit p-3 rounded-xl border border-customCream items-center justify-center">
            <p className=' font-bold mr-3'>Hire Me</p>
            <img src="assets/rightArrow.png" alt="right Arrow" className=' w-7'/>
          </div> 
        </div>

        <div ref={tiltRef} className='outside h-72 border border-solid border-customCream '>
          <img src="assets/profilePhoto.png" alt="profilePhoto" className='h-80 w-64 -translate-y-9' />
        </div>
      </div>
    </div>
    
  );
};

export default About;
