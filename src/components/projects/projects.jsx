import separator from '../../assets/images/separator.webp'
import React from 'react';
import { Data2 } from '../Data/data';
import { motion } from 'framer-motion';
import { HiExternalLink } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGithub } from "react-icons/fa";

const Projects = () => {

   useEffect(() => {
          Aos.init({
            duration: 1000,  // مدة التأثير
            once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
          });
        }, []);

    return (
     <>
            <div className="flex flex-col items-center justify-center w-full h-full text-white py-24" id='projects' style={{fontFamily:"serif"}}>

                      <div className='flex flex-col justify-center items-center' data-aos="fade-up">
                    <h1 className="text-3xl text-blue-600 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl"><span className=" mx-4">Latest</span>PROJECTS</h1>

                    <p className="text-gray-500 my-6 text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl">
                        I have created many projects in my free time
                    </p>



<div className='flex flex-col justify-between items-between p-5'>
  {Data2.map((item, index) => (
    <div 
      key={index} 
      className={`flex gap-5 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
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
        <h1 className="text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl text-yellow-600">
          {item.title}
        </h1>

        <a href={item.link} className="text-blue-600 flex gap-1 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"> Live <HiExternalLink size={20}/> </a>
        <a href={item.gitHub} className="text-blue-600 flex gap-2 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px] ">GitHub <FaGithub size={20}/> </a>
      
       
      </div>
      <div className='ml-1 sm:ml-1 md:ml-20 lg:ml-60 xl:ml-80'></div>
    </div>
  ))}
</div>





                 </div>
        
          
                 
                </div>


                </>
      
    );
};

export default Projects;
