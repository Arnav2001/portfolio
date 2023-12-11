import React, { useEffect, useState, useRef } from 'react';
import TimeLineAnimation from '@/app/timeLineAnimation/timeLineAnimation';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/app/data/data';
import { useScroll, motion } from 'framer-motion';
const Experience = () => {
  const ref = useRef(null);
  const {scrollProgress} = useScroll({
    target: ref,
    offset:["start end", "center start"]
  });
  // const [ref, inView] = useInView({
  //   triggerOnce: false,
  // });

  // const [maxHeight, setMaxHeight] = useState(0);
  // const timelineParentRef = useRef(null);

  // useEffect(() => {
  //   // Accessing the DOM element after the component is mounted
  //   const timelineParentElement = timelineParentRef.current;

  //   if (timelineParentElement) {
  //     setMaxHeight(timelineParentElement.clientHeight);
  //   }
  // }, []);

  return (
    <div className='bg-customDarkPurple h-fit flex item-center justify-center w-full p-4'>
      <div ref={ref} className='timeline-parent flex item-center justify-center w-1200 h-fit'>
      <motion.div 
      style={{scaleY:scrollProgress}}
      className=' bg-customCream mr-4 w-2'/>
        <div className="flex-1 flex flex-col gap-4">
      <h1>Professional Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className='text-customCream'>
          <h2>{exp.company}</h2>
          <p>{exp.role}</p>
          <p>{exp.date}</p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
        </div>
        {/* <TimeLineAnimation inView={inView} maxHeight={maxHeight} />
        <div className='flex-1 flex items-center'>
          <div ref={ref} className=' bg-black ml-4 h-1000'/>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
