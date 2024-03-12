"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { projects } from '@/app/data/data';

const ProjectDetail = () => {
const [imageUrl,setImageUrl] = useState('')
const [selectedIndex,setSelectedIndex] = useState(0);

const setImg = (imgUrl,imgIndex)=>{
  
  setImageUrl(imgUrl);
  setSelectedIndex(imgIndex);

}

useEffect(()=>{
  setImageUrl(projects[2].images[0])
},[])

  return (
    <>
    <div className=' w-full h-screen flex'>
    <div className=' bg-gradient-to-b from-customDarkPurple to-customCream overflow-y-scroll h-full w-80'>
      {
        projects[2].images.map((image,index)=>(
          <div key={index} onClick={()=>setImg(image,index)} className=' m-4 cursor-pointer h-48 rounded-xl border-solid border-2 border-black bg-gray-500'
          style={{borderColor: index === selectedIndex ? 'yellow' : 'black',
          borderWidth: '2px',
          borderStyle: 'solid',}} >
            <div className='bg-contain w-full  bg-no-repeat bg-center justify-end flex flex-col h-full' style={{backgroundImage:`url(${image})`}}/>
            </div>
        ))
      }
      </div>
    <div className="   w-full  bg-gradient-to-b from-customDarkPurple to-customCream justify-end flex flex-col h-screen" >
    <div className='bg-contain w-full  bg-no-repeat bg-center justify-end flex flex-col h-screen' style={{backgroundImage:`url(${imageUrl})`}}/>
    
    </div>
    
     
    </div>

     {/* all the details of the project will be shown here  */}
     <div className='h-screen bg-customCream w-full'>
        <div className='flex p-4'>
        <h1>{projects[2].name}</h1>
        <div className='flex-1'/>
        <button>GitHub</button>
        <button className='ml-4'>Live Link</button>
        </div>
        <div className='p-4 flex flex-wrap gap-4'>
            {
              projects[2].technologies.map((technologie,index)=>(
                <div key={index} className=' w-fit p-4 rounded-xl bg-customLightPurple text-customDarkPurple'>
                  <h1>
                    {technologie}
                  </h1>
                </div>
              ))
            }
        </div>
        <div className = 'p-4'>
          <h1>{projects[2].description}</h1>
          </div>
        
     </div>
    </>
  );
};

export default ProjectDetail;
