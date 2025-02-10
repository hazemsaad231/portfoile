import '@fortawesome/free-regular-svg-icons'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {Icons} from '../Data/data'

const Skills = () => {


   useEffect(() => {
      Aos.init({
        duration: 1000,  // مدة التأثير
        once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
      });
    }, []);



    return (

   <div className="py-32 flex flex-col items-center justify-center" id="skills">
     <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-bold tracking-[4px]' data-aos="fade-up" style={{ fontFamily: "sans-serif" }}>Skills</h1>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 mt-16 cursor-pointer gap-16" data-aos="fade-up">
      {Icons.map(({ name, icon: Icon }) => (
     <div
      key={name}
      className="rounded-lg p-4 w-24 h-24 bg-transparent transition-all duration-500 bg-gradient-to-r from-indigo-700 to-gray-100 flex items-center justify-center relative group"
    >
      <div className='flex flex-col justify-center items-center gap-1'>
      <Icon size={40} />
      {name}
      </div>
     

      <span className="fixed opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500 bg-gradient-to-l w-24 h-24 from-indigo-700 to-gray-100 text-lg font-bold text-white">
      {name}
      </span>
    </div>
  ))}
   </div>

        </div>
    )
}

export default Skills
