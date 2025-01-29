import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {


   useEffect(() => {
      Aos.init({
        duration: 1000,  // مدة التأثير
        once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
      });
    }, []);



    return (

        <div className="py-20" data-aos="zoom-in" id="skills">
            <h1 className='font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl py-20 text-center text-blue-700 tracking-[8px]'style={{ fontFamily: "arial" }}>Skills</h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-12 w-full p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20 m-auto cursor-pointer">

                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <FaHtml5 size={100} className=' text-blue-700 m-auto' /></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <SiCss3 size={100} className=' text-blue-700 m-auto' /></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <SiJavascript size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <RiTailwindCssFill size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <SiTypescript size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <FaReact size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <SiRedux size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <FaFigma size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <FaGithub size={100} className=' text-blue-700 m-auto'/></div>
                <div className="border border-gray-300 rounded-lg p-4 bg-transparent" id="btn"> <SiFirebase size={100} className=' text-blue-700 m-auto'/></div>






               
            
            </div>
        </div>
    )
}

export default Skills
