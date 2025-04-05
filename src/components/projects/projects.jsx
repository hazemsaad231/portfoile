import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import  Data  from '../Data/data';
import { Data2 } from '../Data/data';



const Projects = () => {
  const [active, setActive] = useState('react');
  const [isReact, setIsReact] = useState(true);
  const [isJs, setIsJs] = useState(false);

  const handleToggle = (type) => {
    setActive(type);
    if (type === 'react') {
      setIsReact(true);
      setIsJs(false);
    } else if (type === 'js') {
      setIsReact(false);
      setIsJs(true);
    } else {
      setIsReact(true);
      setIsJs(true);
    }
  };

  const renderProjects = (data) => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10 opacity-98 hover:opacity-100"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="card rounded-xl border border-gray-600 shadow-2xl cursor-pointer"
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

          <div className="flex justify-between p-2 bg-gray-900 shadow-2xl rounded-b-xl">
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
  );

  return (
    <>
      <div className="pt-12 pb-4" id="projects">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block" style={{ WebkitTextFillColor: "transparent" }}>
            Projects <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl mb-4">
            I have created many projects in my free time
          </p>
          <ul className='flex gap-1 sm:gap-2 md:gap-20 lg:gap-20 xl:gap-20 p-4 text-white text-xl cursor-pointer'>
            <li 
              className={` ${active === 'react' ? 'bg-gradient-to-r from-primary to-white transform -rotate-12 transition-all duration-500 w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`} 
              onClick={() => handleToggle('react')}
            >
              React
            </li>
            <li 
              className={` ${active === 'js' ? 'bg-gradient-to-r from-primary to-white transform rotate-12 transition-all duration-500 w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`} 
              onClick={() => handleToggle('js')}
            >
              JS
            </li>
            <li 
              className={` ${active === 'all' ? 'bg-gradient-to-r from-primary to-white transform rotate-12 transition-all duration-500 w-24 text-center rounded-full' : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'}`} 
              onClick={() => handleToggle('all')}
            >
              All
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center p-10">
          {isReact && renderProjects(Data)}
          {isJs && renderProjects(Data2)}
        </div>
      </div>
    </>
  );
};

export default Projects;
