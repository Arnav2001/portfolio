import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScroll } from 'react-use';

const ScrollableDiv = () => {
  const controls = useAnimation();
  const scrollRef = useRef();

  const { y } = useScroll(scrollRef, { offset: [0, window.innerHeight] });

  useEffect(() => {
    controls.start({ height: y });
  }, [controls, y]);

  return (
    <div
      ref={scrollRef}
      style={{
        width: '2px',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        bottom: 0,
      }}
    >
      <motion.div
        style={{
          height: '100%',
        }}
        animate={controls}
      />
    </div>
  );
};

export default ScrollableDiv;
