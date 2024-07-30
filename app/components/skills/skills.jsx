// Install necessary packages: next, react, react-dom, tailwindcss
// Add this code to your Next.js page component

import {skills} from '../../data/data'
import ConeShape from '../skills/cone'
export default function Skills() {

  return( 
  <div className=' w-full p-12 bg-customDarkPurple flex flex-col items-center justify-center'>
    <div className=' bg-customCream  p-2 rounded-3xl w-1200'>
      <div className=' w-full h-full bg-white pl-4 pr-4 pb-4 rounded-3xl'>
        <div className='w-full flex items-center justify-center -translate-y-12'>
          <h1 className=' font-bold text-7xl text-gray-400'>SKILLS</h1>
        </div>
        <div className='flex gap-6 flex-wrap w-full p-2 justify-start items-center'>
        {skills.map((skill, index) => (
        <div key={index} className={`w-32 h-32 p-2 rounded-lg items-center flex flex-col justify-center text-center ${skill.bgColor || 'bg-yellow-200'}`}>
          <div className='w-10 h-10'>
          <img src={skill.imgUrl} alt={skill.title} />
          </div>
          <div className='h-4'/>
          <h1>{skill.title}</h1>
        </div>
      ))}
        </div>
      </div>
      <div className='w-full flex justify-center p-2'>
      <img src="assets/apple.svg" alt="appleIcon" className='w-10 h-10' />
      </div>
      
    </div>
    <ConeShape/>
    <div className=' bg-customCream h-10 w-40'></div>
  </div>
  );
}
