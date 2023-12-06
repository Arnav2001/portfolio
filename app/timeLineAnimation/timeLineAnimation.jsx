import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

const TimeLineAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (inView) {
        const currentScrollY = window.scrollY;
        setScrollPosition(currentScrollY-lastScrollY);

        // Update lastScrollY for the next comparison
      }
    };

    // Attach the scroll event listener when the component is in view
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <div ref={ref} className="bg-customCream w-1" style={{ height: `${scrollPosition}px` }}></div>
  );
};

export default TimeLineAnimation;
