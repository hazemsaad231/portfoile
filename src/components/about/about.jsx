import '@fortawesome/fontawesome-free/css/all.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import img from '../../assets/images/about-me.jpg'
import { useEffect, useState } from 'react';




const About = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,  // مدة التأثير
          once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
        });
      }, []);

      const [active, setActive] = useState(false);

      const [viewSkills, setViewSkills] = useState(true);
      const [viewEducation, setViewEducation] = useState(false);
      const [viewCourse, setViewCourse] = useState(false);

      const toggleView = () => {
        setViewSkills(true);
        setViewEducation(false);
        setViewCourse(false);
      }

      const toggleView2 = () => {
        setViewEducation(true);
        setViewSkills(false);
        setViewCourse(false);
      }

      const toggleView3 = () => { 
        setViewCourse(true);
        setViewEducation(false);
        setViewSkills(false);
      }

      const toggleActive = (e) => {
        setActive(e);
        
      }

    
    return (
        <>
        <div className="flex flex-col gap-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-center px-4 py-16" id='about'style={{fontFamily:"sans-serif"}} >
          
       
          
          <div>

            <h1 className="bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-[2px]">About Me</h1>
            
            <p className="text-gray-300 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] mt-4 text-lg z-1">
            I'm Hazem Mahisin Saad, a front-end expert in React.js, with experience in building modern, interactive, experimental UIs. He worked on developing free dynamic web applications.
            I've built online stores, control panels, and data management systems, and I'm interested in improving performance and user experience.
            </p>
            <ul className='flex gap-x-5 mt-5 text-xl text-gray-300 cursor-pointer'>
            <li 
     onClick={() => {
       toggleActive('skills'),
      toggleView();
  }} 
  className={`relative cursor-pointer transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'text-indigo-600' : 'text-gray-300'}
  `}
>
  Skills
  <span className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'w-full' : 'w-0'}`}>
  </span>
</li>
              <li onClick={()=>{toggleActive('education');
                 toggleView2()}} className={`relative cursor-pointer transition-all duration-700 ease-in-out ${active==='education' ? 'text-indigo-600' : 'text-gray-300'}`}>Education <span
               className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-700 ease-in-out ${active==='education' ? 'w-full' : 'w-0'}`}></span></li>
              <li onClick={()=>{toggleActive('certifications');
                 toggleView3()}} className={`relative cursor-pointer transition-all duration-700 ease-in-out ${active==='certifications' ? 'text-indigo-600' : 'text-gray-300'}`}>Courses
                 <span className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-700 ease-in-out ${active==='certifications' ? 'w-full' : 'w-0'}`}></span></li>
            </ul>

            <div className='mt-5 ml-4 text-gray-300 cursor-pointer text-xl'>
            {viewSkills &&
              <ul className='grid grid-cols-2 list-disc' data-aos="fade-up">
                <li>html</li>
                <li>react query</li>
                <li>css</li>
                <li>redux</li>
                <li>javascript</li>
                <li>framer motion</li>
                <li>tailwind</li>
                <li>firebase</li>
                <li>react</li>
                <li>figma</li>
                <li>material ui</li>
                <li>basics of c++</li>
                </ul>
              }
              {viewEducation &&
              <ul className='grid grid-cols-1 list-disc' data-aos="fade-up">
                <li>computer science</li>
                <li>university of banha (2020-2024)</li>
              </ul>
              }

             {viewCourse &&
              <ul className='grid grid-cols-1 list-disc' data-aos="fade-up">
                <li>udemy</li>
                <li>upskilling</li>
              </ul>
             }
            </div>


            </div>
            <div className="" data-aos="fade-right">
            <img src={img} alt="" className="w-60 sm:w-60 md:w-96 lg:w-96 xl:w-96 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[500px] xl:h-[500px] rounded-full" />
            </div>
          
       

            </div>

        </>
    )
}

export default About