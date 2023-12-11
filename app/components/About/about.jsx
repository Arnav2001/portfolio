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
    <div className='bg-customDarkPurple justify-center items-center flex h-full w-full p-4'>
    
      <div className='w-1200 flex justify-center items-center'>
        
        <div className='w-550 flex flex-col mr-6'>
          <h1 className='font-bold text-4xl text-cyan-100'>Hi, I'm Arnav Kulshrestha</h1>
          <h2 className='text-xl text-blue-200 font-normal'>Software Developer</h2>
          <p className='mt-4 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus cumque animi voluptatibus dicta assumenda magni qui, quos tempore! Beatae accusamus culpa labore fugit deleniti nihil nulla hic ducimus error.</p>
          <div className='icons mt-4 flex gap-2'>
          <img src="assets/linkedin.svg" alt="linkedin" className=' w-7 cursor-pointer shadow-md shadow-white bg-white rounded-full p-1'/>
          <img src="assets/github.svg" alt="github" className=' w-7 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
          <img src="assets/leetcode.png" alt="leetcode" className=' w-7 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
          <img src="assets/geeksforgeeks.svg" alt="gfg" className=' w-7 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
          </div>
          <div className=" bg-customCream mt-4 hover:bg-customDarkPurple hover:text-customCream hover:border-customCream flex text-customDarkPurple w-fit p-3 rounded-xl border border-customCream items-center justify-center">
            <p className=' font-bold mr-3'>Hire Me</p>
            <img src="assets/rightArrow.png" alt="right Arrow" className=' w-7'/>
          </div> 
          
        </div>
        <div ref={tiltRef} className='outside h-72 bg-customLightPurple border border-solid border-customCream '>
          <img src="assets/profilePhoto.png" alt="profilePhoto" className='h-80 w-64 -translate-y-9' />
        </div>
      </div>
    </div>
    
  );
};

export default About;
