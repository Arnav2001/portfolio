import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { achievementsList } from '@/app/data/data';
import './achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  
  useEffect(() => {
    const confettiFalling = () => {
      var box = document.getElementById("box");
      var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

      for (var i = 0; i < 1000; i++) {
        var div = document.createElement("div");
        div.classList.add("confetti");
        box.appendChild(div);
      }

      var confetti = document.querySelectorAll('.confetti');
      for (var i = 0; i < confetti.length; i++) {
        var size = Math.random() * 0.01 * [i];

        confetti[i].style.width = 5 + size + 'px';
        confetti[i].style.height = 16 + size + 'px';
        confetti[i].style.left = Math.random() * innerWidth + 'px';

        var background = colors[Math.floor(Math.random() * colors.length)];
        confetti[i].style.backgroundColor = background;

        box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
      }
    };

    confettiFalling();
  }, [inView]);

  return (
    <div className='w-full bg-customDarkPurple text-white h-full flex justify-center flex-col items-center'>
      <div className="box" id="box"></div>
      <div className='w-1200'>
      <h1 className=' font-bold text-7xl text-center mb-4 text-gray-400'>ACHIEVEMENTS</h1>
      {
        achievementsList.map((achievement,index)=>(
          <div key={index} className='flex items-center p-4'>
            <div className=' bg-contain bg-no-repeat bg-center mr-2 h-10 w-10' style={
              {backgroundImage:`url(/assets/trophy.png)`}
            }/>
            <div>
            <p className=' text-xl font-bold text-customCream' ref={ref}>{achievement.title}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Achievements;
