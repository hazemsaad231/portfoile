import separator from '../../assets/images/separator.webp'
import React from 'react';
import  Data  from '../Data/data';
import { motion } from 'framer-motion';
import { HiExternalLink } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { Data2 } from '../Data/data';

const Projects = () => {


const [isReact, setIsReact] = useState(true);
const [isJs, setIsJs] = useState(false);




const toggleReact = () => {
  
  setIsReact(true);
  setIsJs(false);
  
};

const toggleJs = () => {  
 
  setIsJs(true);
  setIsReact(false);
};

const toggleAll = () => {
  setIsJs(true);
  setIsReact(true);
};



   useEffect(() => {
          Aos.init({
            duration: 1000,  // مدة التأثير
            once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
          });
        }, []);

    return (
     <>
            <div className="flex flex-col w-full h-full text-white py-32" id='projects' style={{fontFamily:"serif"}}>
          
            <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className="text-2xl text-blue-600 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl tracking-[8px]">PROJECTS</h1>
                    <ul className='flex gap-14 py-4 text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl cursor-pointer'>
                      <li onClick={toggleReact}>react</li>
                      <li onClick={toggleAll}>all</li>
                      <li onClick={toggleJs}>js</li>
                    </ul>

                    <p className="text-gray-500 my-2 text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl">
                        I have created many projects in my free time
                    </p>
                    </div>

                      <div className='flex flex-col justify-center items-center' data-aos="fade-up">

                
                    {isReact && (
<div className='flex flex-col justify-between items-between p-2'>

  
  {Data.map((item, index) => (
    <div 
      key={index} 
      className={`flex gap-4 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      data-aos="fade-up"
    >
      <motion.div
        initial={{ opacity: 0, x: -100}}  // العنصر يبدأ غير مرئي ويبدأ من اليسار
        animate={{ opacity: 1, x: 0 }}     // العنصر يظهر ويعود إلى مكانه الطبيعي
        whileInView={{ opacity: 2, x: 0 }} // عند التمرير، العنصر يظهر تدريجياً
        whileHover={{ scale: 1.3, rotate: 15 }}  // عند المرور تكبير العنصر وتدويره
        whileTap={{ scale: 0.95 }}          // عند الضغط، العنصر يصغر قليلاً
        transition={{ duration: 0.4 }}

      >
        <img src={item.img} alt="" className="w-68 sm:w-88 md:w-88 lg:w-96 xl:w-96 h-60 sm:h-88 md:h-88 lg:h-96 xl:h-96 opacity-95 object-center hover:scale-110 hover:opacity-100 transition duration-300 rounded-xl p-5" />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-yellow-600">
          {item.title}
        </h1>

        <a href={item.link} className="text-blue-600 flex gap-1 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"> Live <HiExternalLink size={20}/> </a>
        <a href={item.gitHub} className="text-blue-600 flex gap-2 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px] ">GitHub <FaGithub size={20}/> </a>
      
       
      </div>
      <div className='ml-1 sm:ml-1 md:ml-20 lg:ml-60 xl:ml-80'></div>
    </div>
  ))}


</div>
)}

{isJs && (
<div className='flex flex-col justify-between items-between p-2'>

  
  {Data2.map((item, index) => (
    <div 
      key={index} 
      className={`flex gap-4 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      data-aos="fade-up"
    >
      <motion.div
        initial={{ opacity: 0, x: -100}}  // العنصر يبدأ غير مرئي ويبدأ من اليسار
        animate={{ opacity: 1, x: 0 }}     // العنصر يظهر ويعود إلى مكانه الطبيعي
        whileInView={{ opacity: 2, x: 0 }} // عند التمرير، العنصر يظهر تدريجياً
        whileHover={{ scale: 1.3, rotate: 15 }}  // عند المرور تكبير العنصر وتدويره
        whileTap={{ scale: 0.95 }}          // عند الضغط، العنصر يصغر قليلاً
        transition={{ duration: 0.4 }}

      >
        <img src={item.img} alt="" className="w-68 sm:w-88 md:w-88 lg:w-96 xl:w-96 h-60 sm:h-88 md:h-88 lg:h-96 xl:h-96 opacity-95 object-center hover:scale-110 hover:opacity-100 transition duration-300 rounded-xl p-5" />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-yellow-600">
          {item.title}
        </h1>

        <a href={item.link} className="text-blue-600 flex gap-1 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"> Live <HiExternalLink size={20}/> </a>
        <a href={item.gitHub} className="text-blue-600 flex gap-2 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px] ">GitHub <FaGithub size={20}/> </a>
      
       
      </div>
      <div className='ml-1 sm:ml-1 md:ml-20 lg:ml-60 xl:ml-80'></div>
    </div>
  ))}


</div>
)}


                 </div>
        
          
                 
                </div>


                </>
      
    );
};

export default Projects;
