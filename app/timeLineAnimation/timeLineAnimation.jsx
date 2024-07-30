import React, { useEffect, useState, useRef } from 'react';

const TimeLineAnimation = ({ inView, maxHeight }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialScroll, setInitialScroll] = useState(0);

  useEffect(() => {


    const handleScroll = () => {
      if (inView) {
        const currentScrollY = window.scrollY;
        let scrollDelta = 0;
        if(initialScroll<currentScrollY){
         scrollDelta = currentScrollY - initialScroll;
      }else{
        scrollDelta = maxHeight-(initialScroll - currentScrollY);
      }
        setScrollPosition(scrollDelta >= 0 ? scrollDelta : 0);
        console.log(maxHeight,scrollDelta);
      }else{

      }
    };

    // Set the initial scroll position when the component is mounted
    setInitialScroll(window.scrollY);

    // Attach the scroll event listener when the component is in view
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or is out of view
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, initialScroll]);

  return (
    <div
      className="bg-customCream w-2"
      style={{ height: `${Math.min(maxHeight, scrollPosition)}px` }}
    />
  );
};

export default TimeLineAnimation;
