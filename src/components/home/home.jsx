import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaW } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import myimage from '../../assets/images/myProfile.jpg'
import { FaWhatsapp } from "react-icons/fa";



const Home = () => {
  return (
    <>
    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-center py-48' id='home' style={{fontFamily:"serif"}}>

    <div className='py-20 '>
        <motion.h1 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-blue-[#4A90E2]  mb-4' animate={{marginBottom:"20px"}} transition={{ duration: 1 }}>
           Hello I'm <span>Hazem mahisin</span>
        </motion.h1>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl mb-3 text-[#4A90E2]'>

          
          <TypeAnimation
          sequence={[
      'software engineer',
      1000,
      'web developer',
      1000,
          ]}
          wrapper="h1"
          speed={1} 
          repeat={Infinity}
          cursor={true}/>

          </h1>

        <p className='text-sm text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl w-80 mb-4 '>

        I'm professional web developer 

        </p>
        <div className='flex '>

        <a href="/CV.pdf" download="HazemSaad_CV.pdf"><button className='text-md bg-[#4A90E2] rounded-full hover:bg-blue-500 px-4 py-2'>Download cv <i className="fas fa-download"></i></button></a>

        <a href="https://github.com/dashboard"><FaGithub className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 hover:text-blue-600'/></a>
        <a href="https://www.linkedin.com/in/hazem-saad-719083282"><FaLinkedin className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl hover:text-blue-600'/></a>
        <a href="https://www.facebook.com/hazem.mahisin"> <FaFacebookSquare className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-[#4A90E2]'/></a>
        <a href="https://wa.me/201062588052"> <FaWhatsapp className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-[#4A90E2]'/></a>


        </div>
    </div>
   

    <div className="flex items-center justify-center">
    <motion.div
  className="relative w-60 sm:w-60 md:w-68 lg:w-72 xl:w-72 h-60 sm:h-60 md:h-68 lg:h-72 xl:h-72 rounded-full shadow-xl"
  animate={{
    clipPath: [
      "circle(50% at 40% 40%)", 
      "circle(50% at 45% 45%)", // تموج باتجاه اليمين
      "circle(50% at 50% 50%)", // العودة إلى الدائرة المثالية
      "circle(50% at 55% 55%)", // تموج باتجاه اليسار
      "circle(50% at 60% 60%)" // العودة إلى الدائرة المثالية
    ],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  }}
  whileHover={{
    scale: 1.1, // تأثير تكبير خفيف عند المرور بالفأرة
  }}
>
  <img
    src={myimage}
    alt="Profile"
    className="w-full h-full object-cover rounded-full shadow-lg"
  />
</motion.div>




    </div>
</div>

</>

  )
};

export default Home



