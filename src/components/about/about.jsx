import '@fortawesome/fontawesome-free/css/all.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';




const About = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,  // مدة التأثير
          once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
        });
      }, []);

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
        <div className='flex flex-col px-4 sm:px-4 md:px-20 lg:px-20 xl:px-20 py-12' id='about'style={{fontFamily:"sans-serif"}} >
       
          <div>

            <h1 className="bg-gradient-to-b from-white to-indigo-700 bg-clip-text text-transparent text-start text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-[2px]">About Me</h1>
            
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 sm:gap-6 md:gap-10 lg:gap-10 xl:gap-12' data-aos="fade-right">
            <p className="text-gray-300 w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%] xl:w-[600px] mt-8 text-lg z-1">
            I'm Hazem Mahisin Saad, a front-end expert in React.js, with experience in building modern, interactive, experimental UIs. He worked on developing free dynamic web applications.
            I've built online stores, control panels, and data management systems, and I'm interested in improving performance and user experience.
            <p className='mt-4'>
            I stay up-to-date with the evolving landscape of web technologies to ensure that I always deliver cutting-edge solutions. Whether it's collaborating on a small project or developing a large-scale web application,
            I bring dedication and expertise to every task.
            </p>
           
            </p>

            <div className="" data-aos="fade-right">
            <ul className='flex gap-x-5 mt-5 text-xl text-gray-300 cursor-pointer relative top-2 '>
            <li 
     onClick={() => {
       toggleActive('skills'),
      toggleView();
  }} 
  className={`text-2xl font-bold relative cursor-pointer transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'text-indigo-600' : 'text-gray-300'}
  `}
>
  Skills
  <span className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'w-full' : 'w-0'}`}>
  </span>
</li>
  <li onClick={()=>{toggleActive('education');
    toggleView2()}} className={`text-2xl font-bold  relative cursor-pointer transition-all duration-700 ease-in-out ${active==='education' ? 'text-indigo-600' : 'text-gray-300'}`}>
      Education <span
   className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-700 ease-in-out ${active==='education' ? 'w-full' : 'w-0'}`}></span></li>
            </ul>

            <div className='h-80 mt-10 text-gray-300 cursor-pointer text-xl'>
            {viewSkills &&
              <ul className='grid grid-cols-2 gap-3' data-aos="fade-up">
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>html</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>ReactQuery</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>css</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>tailwind</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>javascript</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>redux</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>framer motion</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>firebase</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>react</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>figma</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>material ui</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>basics of c++</li>
                </ul>
              }
              {viewEducation &&
              <ul className='grid grid-cols-1 gap-3' data-aos="fade-up">
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>computer science</li>
                <li className='bg-indigo-600 text-white px-4 w-max rounded-full'>university of banha (2020-2024)</li>
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