import React from 'react'
import AnimatedHeaderClose from '@/app/textAnimation/animatedHeaderClose';
import AnimatedHeaderOpen from '@/app/textAnimation/animatedHeaderOpen';

const role_res = ()=>{
    const originalText = 'Roles & Resposibility';
    return(
        <div className='bg-customDarkPurple flex h-full w-full p-4'>
        <div className='flex flex-col'>
          <AnimatedHeaderOpen originalText={originalText} />
          <div className="flex-1 bg-customCream w-1" />
          <AnimatedHeaderClose originalText={originalText} />
        </div>
      </div>
    );
}

export default role_res;