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
     <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center text-[#4A90E2] tracking-[12px]' data-aos="fade-up" style={{ fontFamily: "serif" }}>Skills</h1>

     <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 mt-16 cursor-pointer gap-10" data-aos="fade-up">
      {Icons.map(({ name, icon: Icon }) => (
     <div
      key={name}
      className="rounded-lg p-3 w-max bg-transparent transition-all duration-500 hover:bg-[#4A90E2] flex items-center justify-center relative group"
    >
      <Icon size={75} className="text-[#4A90E2]" />
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg font-bold text-white">
        {name}
      </span>
    </div>
  ))}
   </div>

        </div>
    )
}

export default Skills
