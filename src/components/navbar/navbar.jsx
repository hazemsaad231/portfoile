import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import { CiLocationArrow1 } from "react-icons/ci";

const NavBar = () => {

    const [isNavbarVisible, setNavbarVisible] = useState(false);
   
      const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    
      };


    return (
        
        <>

<div className="fixed top-0 p-4 w-full rounded-full z-50">


<div className='flex items-center justify-around w-full'>


<div>
<h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl" style={{fontFamily:"serif"}}>
  H<span className='text-indigo-700 relative right-1'>M</span>
  </h1>
  <h6 className="text-[10px] font-serif m-auto"> Hazem Mahisin</h6>
</div>
        


        <div className="hidden sm:hidden md:block lg:block xl:block">
            <ul className='flex gap-6 text-md sm:text-md md:text-md lg:text-xl xl:text-xl p-2'>
           <li><a href="#home" className="relative transition duration-500 ease-in-out hover:text-indigo-700"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out hover:text-indigo-700">About</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out hover:text-indigo-700">experience</a></li>
                <li> <a  href='#projects' className="relative transition duration-500 ease-in-out hover:text-indigo-700">projects</a></li>
          </ul>
        </div>



     <button className="flex text-md sm:text-md md:text-md lg:text-xl xl:text-xl bg-indigo-700 px-4 py-2 rounded-full hover:bg-transparent"> 
   <CiLocationArrow1 color="white" size={20} className="relative top-1 right-1"/>
    <a href='https://wa.me/201062588052'>contact me</a> 
    </button>

           

<GiHamburgerMenu className='text-2xl mt-1 cursor-pointer block sm:block md:hidden lg:hidden xl:hidden' onClick={toggleNavbar} />


{/* {القاءمه المنسدله} */}
<AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // ❌ تأثير الاختفاء
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 inset-0 w-[40%] h-max p-1 bg-indigo-800 z-40 "
        >
          <div className="flex flex-col gap-2 items-center w-full">

          <ul className="flex flex-col gap-x-3 font-semibold gap-y-4 my-8 mx-4">
          {["home", "about", "experience", "projects", "contact" ].map((item) => (
            <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // ❌ تأثير اختفاء كل عنصر
                  transition={{ duration: 0.3, delay: Math.random() * 0.3 }}

                >
                  <a
                    href={`#${item}`}
                    className="relative transition duration-500 ease-in-out"
                    onClick={toggleNavbar}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <button
        onClick={toggleNavbar}
        className="text-white font-bold text-xl absolute top-2 right-2"
       >
        ✖
      </button>
     </div>
  </motion.div>
  )}
 </AnimatePresence> 
    
            </div>
        </div>

        
        </>
    )
}

export default NavBar




         
