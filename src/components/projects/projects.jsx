import separator from '../../assets/images/separator.webp'
import React from 'react';
import  Data  from '../Data/data';
import { motion } from 'framer-motion';
import { RiExternalLinkLine } from "react-icons/ri";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { Data2 } from '../Data/data';

const Projects = () => {


const [isReact, setIsReact] = useState(true);
const [isJs, setIsJs] = useState(false);

const [active, setActive] = useState('react');


const toggleActive = (e) => {
  setActive(e);
  
}


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
            <div className="pt-12 pb-4" id='projects' style={{fontFamily:"sans-serif"}}>
          
            <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className="font-bold bg-gradient-to-t from-indigo-700 to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl tracking-[2px]">Projects</h1>
                    <p className="text-gray-500 text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl mb-4">
                        I have created many projects in my free time
                    </p>
                    <ul className='flex  gap-1 sm:gap-2 md:gap-20 lg:gap-20 xl:gap-20 p-4 text-white text-xl cursor-pointer'>
                      <li className={` ${active === 'react' ? 'bg-gradient-to-r from-indigo-700 to-white transform -rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-indigo-700 to-white w-24 text-center rounded-full'}`} onClick={()=>{toggleReact(); toggleActive('react')}}>React</li>
                      <li  className={` ${active === 'js' ? 'bg-gradient-to-r from-indigo-700 to-white transform rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-indigo-700 to-white w-24 text-center rounded-full'}`} onClick={()=>{toggleJs() ;toggleActive('js')}}>js</li>
                      <li className={` ${active === 'all' ? 'bg-gradient-to-r from-indigo-700 to-white transform rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-indigo-700 to-white w-24 text-center rounded-full'}`}   onClick={()=>{toggleAll(); toggleActive('all')}}>All</li>
                    </ul>

                   
                    </div>

                      <div className='flex flex-col justify-center items-center p-10' data-aos="fade-up">

                
                    {isReact && (
<div className='grid grid-cols-1 sm:grid-cols-1 rounded-xl md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 opacity-98 hover:opacity-100'>

  
  {Data.map((item, index) => (
    <div 
      key={index} 
      data-aos="fade-up"
      className='bg-black opacity-95  shadow-2xl hover:opacity-100 border border-indigo-800 hover:border-2 hover:border-indigo-600 transition duration-300 pb-2 rounded-xl '
    >
      <motion.div
        initial={{ opacity: 0, x: -25}}  // العنصر يبدأ غير مرئي ويبدأ من اليسار
        animate={{ opacity: 1, y: 0 }}     // العنصر يظهر ويعود إلى مكانه الطبيعي
        whileInView={{ opacity: 2, x: 0 }} // عند التمرير، العنصر يظهر تدريجياً
        whileHover={{ scale: 1, rotate: 5 }}  // عند المرور تكبير العنصر وتدويره
        whileTap={{ scale: 1 }}          // عند الضغط، العنصر يصغر قليلاً
        transition={{ duration: 1.2, ease: "easeInOut" }}

      >
        <img src={item.img} alt="" className="w-full h-[350px] object-center rounded-t-xl" />
      </motion.div>

      <div className="flex justify-between p-2">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white">
          {item.title}
        </h1>

<div className='flex gap-2'>
<a href={item.gitHub} className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px] "><FaGithub size={25}/> </a>
<a href={item.link} className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"><RiExternalLinkLine size={25}/></a>
</div>
        
      
       
      </div>
      <div className='ml-1 sm:ml-1 md:ml-20 lg:ml-60 xl:ml-80'></div>
    </div>
  ))}


</div>
)}


{isJs && (
<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 opacity-98 hover:opacity-100'>

  
  {Data2.map((item, index) => (
    <div 
      key={index} 
      data-aos="fade-up"
      className='bg-black opacity-95 shadow-2xl hover:opacity-100 border border-indigo-800 hover:border-2 hover:border-indigo-600 transition duration-300 pb-2 rounded-xl '
    >
      <motion.div
        initial={{ opacity: 0, x: -25}}  // العنصر يبدأ غير مرئي ويبدأ من اليسار
        animate={{ opacity: 1, y: 0 }}     // العنصر يظهر ويعود إلى مكانه الطبيعي
        whileInView={{ opacity: 2, x: 0 }} // عند التمرير، العنصر يظهر تدريجياً
        whileHover={{ scale: 1, rotate: 5 }}  // عند المرور تكبير العنصر وتدويره
        whileTap={{ scale: 1.2 }}          // عند الضغط، العنصر يصغر قليلاً
        transition={{ duration: 1.2, ease: "easeInOut" }}

      >
        <img src={item.img} alt="" className="w-full h-[350px] object-center rounded-t-xl" />
      </motion.div>

      <div className="flex justify-between p-2">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white">
          {item.title}
        </h1>
        <div className='flex gap-2'>
<a href={item.gitHub} className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px] "><FaGithub size={25}/> </a>
<a href={item.link} className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"><RiExternalLinkLine size={25}/></a>
</div>
      
       
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
