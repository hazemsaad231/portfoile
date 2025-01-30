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

   <div className="py-24" id="skills">
     <h1 className='font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center text-blue-700 tracking-[12px]' data-aos="fade-up" style={{ fontFamily: "serif" }}>Skills</h1>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 px-12 sm:px-16 md:px-24 lg:px-36 xl:px-40 mt-16 cursor-pointer gap-10" data-aos="fade-up">
      {Icons.map(({ name, icon: Icon }) => (
     <div
      key={name}
      className="border border-gray-300 rounded-lg p-3 w-max bg-transparent transition-all duration-500 hover:bg-blue-700 flex items-center justify-center relative group"
    >
      <Icon size={70} className="text-blue-700" />
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
