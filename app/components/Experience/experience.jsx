import React from 'react'
import AnimatedHeaderClose from '@/app/textAnimation/animatedHeaderClose';
import AnimatedHeaderOpen from '@/app/textAnimation/animatedHeaderOpen';
import TimeLineAnimation from '@/app/timeLineAnimation/timeLineAnimation'
const experience = ()=>{
    const originalText = 'Experience';
return(
<div className='bg-customDarkPurple flex h-full w-full p-4'>
      <div className='flex flex-col'>
        <AnimatedHeaderOpen originalText={originalText} />
        <div className="flex-1 bg-customCream w-1" />
        <AnimatedHeaderClose originalText={originalText} />
      </div>
      <div className='flex item-center'>
        <TimeLineAnimation/>
      </div>
    </div>
);
}

export default experience;