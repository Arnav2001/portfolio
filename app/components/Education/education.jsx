import './educationStyle.css'
import {educationList} from '../../data/data';
const Education = () => {
  return (
    <div className=' bg-customCream w-full'>
      <img src="/assets/blueWave.svg" alt="purple Wave"/>
    
<div className=' p-4 flex flex-col justify-center items-center w-full bg-customCream'>
<h1 className=' font-bold text-7xl text-center mb-4 text-gray-600'>EDUCATION</h1>
  <div className='bg-img border flex flex-col rounded-3xl border-solid bg-white border-customLightPurple w-1200 mb-8'>
    <div className='p-4 translate-y-5 gap-2 flex flex-col justify-center items-center h-fit'>
      
      {
        educationList.map((education, index)=>(
          <div key={index} className='w-full pb-5 rounded-3xl p-4 bg-white opacity-60'>
            <h1 className=' font-bold '>{education.institution}</h1>
            <h2 className=' font-medium'>{education.degree}</h2>
            <h3 className=' font-light'>{education.duration}</h3>
            <p className=''>{education.grade}</p>
          </div>
        ))
      }

    </div>

    <div className='w-full h-fit flex justify-end items-end translate-x-12 translate-y-6'>
      <img src="assets/book.webp" alt="books" height={100} width={100}  />
    </div>

  </div>
  </div>
  </div>
  );
};

export default Education;
