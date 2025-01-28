/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import myimage from '../../assets/images/myProfile.jpg'
import separator from '../../assets/images/separator.webp'

const ComponentA = () => {
  return (
    <>
    <div className='bg-black bg-opacity-95 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-center h-full py-44 w-screen' style={{fontFamily:"cursive"}}>

    <div className='text-white py-20 '>
        <motion.h1 className='son font-extrabold text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-green-600 mb-4' animate={{marginBottom:"20px"}} transition={{ duration: 1 }}>
           Hello I'm <span>Hazem mahisin</span>
        </motion.h1>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl mb-3'>

          
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
        <button className='text-md bg-green-600 hover:bg-green-500 text-white px-4 py-2'>Download cv <i className="fas fa-download"></i></button>
        <a href="https://github.com/dashboard"><FaGithub className='text-4xl text-white mx-4 hover:text-green-600'/></a>
        <a href="https://www.linkedin.com/in/hazem-saad-719083282"><FaLinkedin className='text-4xl text-white hover:text-green-600'/></a>
        <a href="https://www.facebook.com/hazem.mahisin"> <FaFacebookSquare className='text-4xl mx-4 text-green-600'/></a>

        </div>
    </div>
   

    <div className="flex items-center justify-center">
      <motion.div
        className="relative w-80 h-80 rounded-full p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"

        animate={{
   
          scale: [1, 1.1, 1], // تكبير وتصغير ناعم
          boxShadow: [
            "0px 0px 10px rgba(0,0,255,0.5)",
            "0px 0px 20px rgba(255,0,255,0.7)",
            "0px 0px 10px rgba(0,0,255,0.5)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          scale: 1.2,
          borderColor: "rgba(0, 0, 255, 0.7)", // إطار أزرق عند التحويل
          boxShadow: "0px 0px 30px rgba(0,0,255,0.8)",
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

 <div>
            <img src={separator} alt=""  className='w-full h-5'/>
        </div>

</>

  )
};

const ComponentB = () => {
  return (
    <div className={style.ComponentB}>
       <div className='font-serif rounded-full p-2 absolute left-4/6 sm:left-1/3 md:left-1/3 lg:left-1/3 xl:left-1/3 top-1/3 sm:top-1/3 md:top-1/3 lg:top-1/3 xl:top-1/3'>
       <div className='text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl'>
      <h1>Hi!</h1>
      <h1> I am Hazem </h1>
      </div>
       
      <button className='border border-black rounded-full bg-zinc-200 text-black text-md sm:text-md md:text-base lg:text-lg xl:text-3xl  px-1 mt-5 hover:bg-transparent'>Download CV <i className="fas fa-download"></i></button>
        
      </div>
      
    </div>
  );
};



const Home = ()=>{

    const [current,setCurrent] = useState('A');

    useEffect(()=>{
        const toggle = ()=>{
           setCurrent(prev=>prev==='A'?'B':'A')
        }
       const interval = setInterval(toggle,200000);

       return ()=>{
           clearInterval(interval);
       }
    },[])
    


    return(
        <div className="text-black" id='home'>
            {current === 'A'? <ComponentA/>: <ComponentB/>}
        </div>
    )

} 
export default Home



