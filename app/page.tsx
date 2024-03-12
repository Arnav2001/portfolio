'use client'

import React from 'react';
import About from './components/About/about';
import Education from './components/Education/education'
import Experience from './components/Experience/experience'
import Project from './components/Projects/project';
import Achievements from './components/Achievements/achievement'
import Skills from './components/skills/skills'

export default function Home() {
  return (
    <main className="p-0 m-0 bg-customDarkPurple overflow-y-visible h-screen w-full">   
<About/>
<Skills/>
<Education/>
<Experience/>
<Project/>
<Achievements/>
    </main>
  )
}
