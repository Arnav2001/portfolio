'use client'

import React from 'react';
import About from './components/About/about';
import Education from './components/Education/education'
import Experience from './components/Experience/experience'
import Project from './components/Projects/project';
import Achievement from './components/Achievements/achievement'
import Roles_Res from './components/Roles&Resp/role&res'
export default function Home() {
  return (
    <main className="p-0 m-0 overflow-y-visible h-screen w-screen ">
      {/* <ParallaxTilt>
      <div className="content">
        <h1>Name</h1>
        <p>sub heading</p>
      </div>
    </ParallaxTilt> */}
<About/>
<Education/>
<Experience/>
<Project/>
    <Achievement/>
    <Roles_Res/>
    </main>
  )
}
