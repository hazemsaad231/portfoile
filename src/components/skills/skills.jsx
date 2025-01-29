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

   <div className="py-28" data-aos="zoom-in" id="skills">
     <h1 className='font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-center text-blue-700 tracking-[8px] mb-6'style={{ fontFamily: "arial" }}>Skills</h1>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 sm:p-6 md:p-10 lg:p-12 xl:p-12 gap-12">
      {Icons.map(({ name, icon: Icon }) => (
     <div
      key={name}
      className="border border-gray-300 rounded-lg p-4 bg-transparent transition-all duration-500 hover:bg-blue-700 flex items-center justify-center relative group"
    >
      <Icon size={80} className="text-blue-700" />
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
