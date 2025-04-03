import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { Data4 } from '../Data/data';




const About = () => {



      const [active, setActive] = useState('skills');

      const [viewSkills, setViewSkills] = useState(true);
      const [viewEducation, setViewEducation] = useState(false);

      const toggleView = () => {
        setViewSkills(true);
        setViewEducation(false);
      }

      const toggleView2 = () => {
        setViewEducation(true);
        setViewSkills(false);
      }


      const toggleActive = (e) => {
        setActive(e);
        
      }

    
    return (
        <>
        <div className='flex flex-col px-4 sm:px-4 md:px-6 lg:px-8 xl:px-32 py-12' id='about'>
       
          <div>
          <h1 
  className="bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent text-5xl font-bold inline-block"
  style={{ WebkitTextFillColor: "transparent" }}
>
  About Me
</h1>
            
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 sm:gap-6 md:gap-10 lg:gap-10 xl:gap-12'
             >
            <p className="text-gray-300 w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%] xl:w-[600px] mt-8 text-md z-1">
            I'm Hazem Mahisin Saad, a front-end expert in React.js, with experience in building modern, interactive, experimental UIs.
             He worked on developing free dynamic web applications.
            I've built online stores, control panels, and data management systems, and I'm interested in improving performance and user experience.
            <p className='mt-2'>
            I stay up-to-date with the evolving landscape of web technologies to ensure that I always deliver cutting-edge solutions. Whether it's collaborating on a small project or developing a large-scale web application,
            I bring dedication and expertise to every task.
            </p>
           
            </p>

            <div className="" >
            <ul className='flex gap-x-5 mt-5 text-xl text-gray-300 cursor-pointer relative top-2 '>
            <li 
     onClick={() => {
       toggleActive('skills');
      toggleView();
  }} 
  className={`text-2xl font-bold relative cursor-pointer transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'text-[#8750f7]' : 'text-gray-300'}
  `}
>
  Skills
  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#8750f7] transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'w-full' : 'w-0'}`}>
  </span>
</li>
  <li onClick={()=>{toggleActive('education');
    toggleView2()}} className={`text-2xl font-bold  relative cursor-pointer transition-all duration-700 ease-in-out
     ${active==='education' ? 'text-[#8750f7]' : 'text-gray-300'}`}>
      Education <span
   className={`absolute left-0 -bottom-1 h-[2px] bg-[#8750f7] transition-all duration-700 ease-in-out
    ${active==='education' ? 'w-full' : 'w-0'}`}></span></li>
            </ul>


            <div className='h-80 mt-10 text-gray-300 cursor-pointer text-xl'>
            {viewSkills &&
            <div className='grid grid-cols-2 gap-1'>
            {Data4.map((item, index) => (
              <ul key={index}>
                <li className='bg-[#8750f7] text-white px-4 m-1 w-max rounded-full hover:bg-white hover:text-[#8750f7]'>{item}</li>
               
                </ul>
            ))}
            </div>
              }
              {viewEducation &&
              <ul className='grid grid-cols-1 gap-3'>
                <li className='bg-[#8750f7] text-white px-4 w-max rounded-full hover:bg-white hover:text-[#8750f7]'>computer science</li>
                <li className='bg-[#8750f7] text-white px-4 w-max rounded-full hover:bg-white hover:text-[#8750f7]'>university of banha (2020-2024)</li>
              </ul>
              }
            </div>
          
            </div>
          
            
           
       


            </div>
         
            </div>
        
            </div>

        </>
    )
}

export default About