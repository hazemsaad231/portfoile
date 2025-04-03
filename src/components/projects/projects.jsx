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
                    <h1 
   className="bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  Projects
  </h1>
                    <p className="text-gray-500 text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl mb-4">

                        I have created many projects in my free time
                    </p>
                    <ul className='flex  gap-1 sm:gap-2 md:gap-20 lg:gap-20 xl:gap-20 p-4 text-white text-xl cursor-pointer'>
                      <li className={` ${active === 'react' ? 'bg-gradient-to-r from-[#8750f7] to-white transform -rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`} onClick={()=>{toggleReact(); toggleActive('react')}}>React</li>
                      <li  className={` ${active === 'js' ? 'bg-gradient-to-r from-[#8750f7] to-white transform rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`} onClick={()=>{toggleJs() ;toggleActive('js')}}>js</li>
                      <li className={` ${active === 'all' ? 'bg-gradient-to-r from-[#8750f7] to-white transform rotate-12 transition-all duration-500  w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`}   onClick={()=>{toggleAll(); toggleActive('all')}}>All</li>
                    </ul>

                   
                    </div>

                      <div className='flex flex-col justify-center items-center p-10' data-aos="fade-up">

                      {isReact && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 opacity-98 hover:opacity-100"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // ظهور العناصر بالتدريج
            },
          }}
        >
          {Data.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black opacity-95 shadow-2xl hover:opacity-100 border border-[#8750f7] hover:border-2 transition duration-300 pb-2 rounded-xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] object-center rounded-t-xl"
                />
              </motion.div>

              <div className="flex justify-between p-2">
                <motion.h1
                  className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h1>
                <div className="flex gap-2">
                  <motion.a
                    href={item.gitHub}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"
                  >
                    <FaGithub size={25} />
                  </motion.a>
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"
                  >
                    <RiExternalLinkLine size={25} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    


{isJs && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 opacity-98 hover:opacity-100"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // ظهور العناصر بالتدريج
            },
          }}
        >
          {Data2.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black opacity-95 shadow-2xl hover:opacity-100 border border-[#8750f7] hover:border-2 hover:border-[#9950f7] transition duration-300 pb-2 rounded-xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] object-center rounded-t-xl"
                />
              </motion.div>

              <div className="flex justify-between p-2">
                <motion.h1
                  className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h1>
                <div className="flex gap-2">
                  <motion.a
                    href={item.gitHub}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"
                  >
                    <FaGithub size={25} />
                  </motion.a>
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[#4A90E2] text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:text-[16px]"
                  >
                    <RiExternalLinkLine size={25} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}




                 </div>
        
          
                 
                </div>


                </>
      
    );
};

export default Projects;


