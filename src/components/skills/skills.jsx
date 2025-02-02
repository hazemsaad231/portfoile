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
     <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center tracking-[12px]' data-aos="fade-up" style={{ fontFamily: "serif" }}>Skills</h1>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 mt-16 cursor-pointer gap-16" data-aos="fade-up">
      {Icons.map(({ name, icon: Icon }) => (
     <div
      key={name}
      className="rounded-lg p-4 w-max bg-transparent transition-all duration-500 bg-gradient-to-r from-indigo-700 to-gray-100 flex items-center justify-center relative group"
    >
      <Icon size={50} />
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg font-bold text-white">
      
      </span>
    </div>
  ))}
   </div>

        </div>
    )
}

export default Skills
