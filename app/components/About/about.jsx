import TextAnimation from '../../textAnimation/textAnimation';
import React, { useEffect, useRef } from "react";
import './about.css';

const About = () => {
  const tiltRef = useRef();

  useEffect(() => {
    const vanillaTilt = require('vanilla-tilt');
    vanillaTilt.init(tiltRef.current, {
      scale: 1.1,
    });
  }, []);

  const handleDownload = () => {
    const pdfUrl = '/assets/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'arnav_resume.pdf';
    link.click();
  };

  const email = 'arnavkul07@gmail.com';
  

  return (
    <div className='bg-customDarkPurple justify-center items-center flex h-full w-full'>
      <div className='w-1200 flex justify-center items-center'>
        <div className='w-550 flex flex-col mr-6'>
          <h1 className='font-bold text-4xl text-cyan-100 text-start'>Hi, I'm Arnav Kulshrestha</h1>
          <TextAnimation originalText={'SOFTWARE DEVELOPER'}/>
          <p className='mt-4 text-white'>Passionate Computer Science graduate with a B.Tech (Hons) from Poornima College of Engineering. A skilled developer with expertise in Flutter, React, and Nodejs. Lead developer at PhonePanchayat, achieving 300,000+ downloads and winning the Rajasthan Social Impact Champion Award. Proven track record at Doctunes, boosting company revenue by 40%. Recognized in hackathons, including AIR 5 in Xiaomi's "Ode2Code2.0" and top 25 in "Ctrl AltDebt" by CredAvenue.</p>
          <div className='icons mt-4 flex gap-2'>
            <a href="https://www.linkedin.com/in/arnav-kulshrestha-learner/">
              <img src="assets/linkedin.svg" alt="linkedin" className='w-8 cursor-pointer shadow-md shadow-white bg-white rounded-full p-1'/>
            </a>
            <a href="https://github.com/Arnav2001">
              <img src="assets/github.svg" alt="github" className='w-8 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
            </a>
            <a href="https://leetcode.com/arnavkul07/">
              <img src="assets/leetcode.png" alt="leetcode" className='w-8 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
            </a>
            <a href="https://auth.geeksforgeeks.org/user/arnavkul07">
              <img src="assets/geeksforgeeks.svg" alt="gfg" className='w-8 cursor-pointer shadow-md shadow-white bg-customCream rounded-full p-1'/>
            </a>
          </div>
          <div className='flex gap-3'>
            <div onClick={handleDownload} className="bg-customCream mt-6 cursor-pointer hover:bg-customDarkPurple hover:text-customCream hover:border-customCream flex text-customDarkPurple w-fit p-3 rounded-xl border border-customCream items-center justify-center">
              <p className='font-bold mr-3'>Resume</p>
              <img src="assets/rightArrow.png" alt="right Arrow" className='w-7'/>
            </div> 
            <a 
              href={`mailto:${email}`} 
              style={{ textDecoration: 'none' }}
              className="bg-customCream mt-6 cursor-pointer hover:bg-customDarkPurple hover:text-customCream hover:border-customCream flex text-customDarkPurple w-fit p-3 rounded-xl border border-customCream items-center justify-center"
            >
              <p className='font-bold mr-3'>Hire Me</p>
              <img src="assets/rightArrow.png" alt="right Arrow" className='w-7'/>
            </a>
          </div>
        </div>
        <div ref={tiltRef} className='outside h-72 bg-customLightPurple border border-solid border-customCream'>
          <img src="assets/profilePhoto.png" alt="profilePhoto" className='h-80 w-64 -translate-y-9' />
        </div>
      </div>
    </div>
  );
};

export default About;
