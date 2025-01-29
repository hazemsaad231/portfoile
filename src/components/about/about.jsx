import '@fortawesome/fontawesome-free/css/all.min.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import img from '../../assets/images/about-me.jpg'
import { useEffect } from 'react';
import separator from '../../assets/images/separator.webp'




const About = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,  // مدة التأثير
          once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
        });
      }, []);

    
    return (
        <>
        <div className="flex flex-col gap-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-center h-full px-4 py-28" id='about'style={{fontFamily:"serif"}} >
          
          <div data-aos="fade-left">

            <h1 className="text-blue-600 text-center text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl">About Me</h1>
            
            <p className="text-gray-500 w-64 sm:w-64 md:w-80 lg:w-96 xl:w-96 mt-6 p-2 text-lg">
            I'm Hazem Mahisin Saad, a front-end expert in React.js, with experience in building modern, interactive, experimental UIs. He worked on developing free dynamic web applications.
            I've built online stores, control panels, and data management systems, and I'm interested in improving performance and user experience.
            </p>
            </div>

         <div className='border-l-[40px] border-l-yellow-600 border-b-yellow-600 rounded-full' data-aos="fade-right">
            <img src={img} alt="" className="w-60 sm:w-60 md:w-96 lg:w-96 xl:w-96 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[500px] xl:h-[500px]  rounded-full" />
            </div>

            </div>

        </>
    )
}

export default About