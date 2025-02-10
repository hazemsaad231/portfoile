import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {

    const [isNavbarVisible, setNavbarVisible] = useState(false);


   
      const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    
      };


    return (
        
        <>

<div className="fixed top-0 p-4 w-full rounded-full z-50">


        <div className=' flex items-center justify-around w-full p-3' style={{fontFamily:"sans-serif"}}>

        <h1 className="tracking-[10px] font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
            Hazem
           </h1>

        <GiHamburgerMenu className='text-2xl mt-1 cursor-pointer block sm:block md:hidden lg:hidden xl:hidden' onClick={toggleNavbar} />

       



           
         

{/* {القاءمه المنسدله} */}
<AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // ❌ تأثير الاختفاء
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 inset-0 w-[40%] h-max p-1 bg-indigo-800 z-10"
        >
          <div className="flex flex-col items-center w-full">

          <ul className="flex flex-col font-semibold gap-y-4 my-8 mx-4">
          {["home", "about", "experience", "projects", "contact"].map((item) => (
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



       <div className="hidden sm:hidden md:block lg:block xl:block">
            <ul className='flex gap-6 text-md sm:text-md md:text-md lg:text-xl xl:text-xl p-4'>
           <li><a href="#home" className="relative transition duration-500 ease-in-out hover:text-indigo-700"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out hover:text-indigo-700">About</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out hover:text-indigo-700">experience</a></li>
                <li> <a  href='#projects' className="relative transition duration-500 ease-in-out hover:text-indigo-700">projects</a></li>
                <li> <a href='#contact' className="mx-8 relative transition duration-500 ease-in-out hover:text-indigo-700">contact me</a></li>

            </ul>
          
            </div>

            </div>
        </div>

        
        </>
    )
}

export default NavBar




         
