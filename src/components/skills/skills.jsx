import Data from "../data"
import separator from '../../assets/images/separator.webp'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import React from "react";


  
  const Skills = () => {
  

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      pauseOnHover: true,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    }





    useEffect(() => {
          Aos.init({
            duration: 1000,  // مدة التأثير
            once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
          });
        }, []);



    return (
      <>
      <div className="bg-black bg-opacity-95 flex flex-col justify-center items-center w-full h-full  text-white py-20" id='skills' style={{fontFamily:"cursive"}}>
        <h1 className="text-lg text-green-600 sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl tracking-[5px] mb-4">Skills</h1>
        <p></p>
<div className="grid grid-cols-1">
  

 
        <Slider {...settings}>
          {Data.map((item, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}

            >
              <div className="flex flex-col items-center justify-start gap-10 bg-yellow-600 h-80 w-max rounded-full my-10">
                <div className="p-4 bg-white rounded-full">
                <img
                src={item.img}
                alt=""
                className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-max xl:h-20 object-cover"
              />
                </div>
             
              <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl mt-2">{item.title}</p>
              </div>
             
            </motion.div>
          ))}
        </Slider>
        </div>
        </div>

      </>
    );
  };
  
  export default Skills;
  
