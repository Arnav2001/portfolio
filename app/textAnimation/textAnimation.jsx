// AnimatedHeader.js
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

const TextAnimation = ({ originalText }) => {
  const [ref, inView] = useInView({
    triggerOnce:true,
  });

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const h1Ref = useRef();
  const [animatedText, setAnimatedText] = useState(originalText);

  useEffect(() => {
    if (inView) {
      let iterations = 0;

      const interval = setInterval(() => {
        setAnimatedText(prevText => prevText.split('')
          .map((letter, i) => {
            if (i < iterations || letter == ' ') {
              return originalText[i].toUpperCase();
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(''));

        if (iterations >= originalText.length) {
          clearInterval(interval);
        }

        iterations += 1 / 2;
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView, originalText]);

  return (
      <div ref={ref} className="tags flex">
        {/* <h1 className=' text-customLightPurple text-lg font-bold'>&lt;</h1> */}
        <h1 ref={h1Ref} className=' text-customLightPurple text-lg font-bold'>{animatedText}</h1>
        {/* <h1 className=' text-customLightPurple text-lg font-bold'>&gt;</h1> */}
      </div>
  );
};

export default TextAnimation;
