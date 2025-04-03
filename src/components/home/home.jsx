import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
  return (
    <>
    <div className='flex flex-col px-4 sm:px-4 md:px-6 lg:px-8 xl:px-32 pt-40 pb-28' id='home'>

    <div className='mb-10'>
      
    <h1 
  className="bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent text-6xl font-bold tracking-[2px] inline-block"
  style={{ WebkitTextFillColor: "transparent" }}
>
  I'm Hazem
</h1>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl my-3'>

          
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

        <p className='text-md text-gray-200 sm:text-md md:text-md lg:text-lg xl:text-xl w-80 mb-4 '>

        I'm professional web developer 

        </p>
        <div className='flex mb-8'>

        <a href="/CV.pdf" download="HazemSaad_CV.pdf"><button className='text-md rounded-full bg-gradient-to-r from-[#8750f7] via-[#8750f7] to-white px-4 py-2'>Download cv <i className="fas fa-download"></i></button></a>

        <a href="https://github.com/dashboard"><FaGithub className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-white'/></a>
        <a href="https://www.linkedin.com/in/hazem-saad-719083282"><FaLinkedin className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'/></a>
        <a href="https://www.facebook.com/hazem.mahisin"> <FaFacebookSquare className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-white'/></a>
        <a href="https://wa.me/201062588052"> <FaWhatsapp className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-white'/></a>


        </div>
    </div>

<div className='border-2 border-[#8750f7] shadow-xl w-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] transition-all duration-500 ease-in-out hover:bg-[#8750f7] xl:w-[50%] p-4'>
  <ul className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-8 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-24'> 
    <li className='flex gap-2'> <span className='font-bold text-5xl'>2+ </span><span className='text-sm font-sans relative top-4'>Years of Experience</span></li>
    <li className='flex gap-2'> <span className='font-bold text-5xl'>10+ </span><span className='text-sm font-sans relative top-4'>Projects Completed</span></li>
    <li></li>
  </ul>
</div> 



</div>

</>

  )
};

export default Home


