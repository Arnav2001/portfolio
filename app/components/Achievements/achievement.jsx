import React, { useEffect, useState } from 'react';

const Achievements = () => {

  return (
      <div className=' w-full flex justify-center items-center p-6 bg-customDarkPurple'>
        <div className='bg-customLightPurple w-1200 rounded-xl p-4 '>
        <h2>Achievements & Certifications</h2>
          <h1>Participated in XROS fellowship, Hacktoberfest, and C4GT open-source opportunity.</h1>
          <h1>AIR 5 Xiaomi Hackathon “Ode2Code2.0”.</h1>
          <h1>Secured 271st rank in Innovate India Coding Championship finale conducted by Coding Ninjas and AICTE in collaboration with Chandigarh University.</h1>
          <h1>Among the top 25 out of 2600 teams in “Ctrl AltDebt” hackathon by CredAvenue.</h1>
          </div>
      </div>
  );
};

export default Achievements;
