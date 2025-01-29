import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNavbarVisible, setNavbarVisible] = useState(false);

    const toggleMode = () => {
        if (isDarkMode) {

          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          document.body.style.transition = 'background-color 0.7s ease, color 0.7s ease';
        
         
        } else {
          document.body.style.backgroundColor = 'black';
          document.body.style.color = 'white';
          document.body.style.transition = 'background-color 0.7s ease, color 0.7s ease';
          
        }
        setIsDarkMode(!isDarkMode); // تحديث الحالة
      };

      const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    
      };


    return (
        
        <>

<div className="fixed top-0 p-3 w-full rounded-full">


        <div className=' flex items-center justify-around w-full' style={{fontFamily:"serif"}}>


        <GiHamburgerMenu className='text-2xl mt-1 cursor-pointer flex sm:flex md:hidden lg:hidden xl:hidden' onClick={toggleNavbar} />

       



           <h1 className="tracking-[15px] text-blue-700 font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
            hazem
           </h1>

           {isDarkMode ?
         <MdOutlineLightMode className='text-2xl mt-1 cursor-pointer' onClick={toggleMode} />
         :
         <MdOutlineDarkMode className='text-2xl mt-1 cursor-pointer' onClick={toggleMode} />}


<AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // ❌ تأثير الاختفاء
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-black fixed inset-0 z-50 text-white h-[30%] w-[30%] sm:block md:hidden lg:hidden xl:hidden"

        >
          <div className="flex flex-col items-center w-full">
            {/* 🔹 الروابط */}

            <ul className="flex flex-col font-semibold gap-y-4 my-8 mx-4">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
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

            {/* 🔹 زر الإغلاق */}
            <button
              onClick={toggleNavbar}
              className="text-red-500 font-bold text-xl absolute top-2 right-2"
            >
              ✖
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  

  





       <div className="hidden sm:hidden md:hidden lg:block xl:block">
            <ul className="flex gap-6 text-md sm:text-md md:text-md lg:text-xl xl:text-xl p-4 text-blue-600">
           <li><a href="#home" className="relative transition duration-500 ease-in-out"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out">About</a></li>
                <li> <a  href='#skills' className="relative transition duration-500 ease-in-out">skills</a></li>
                <li> <a href='#projects' className="relative transition duration-500 ease-in-out">projects</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out">experience</a></li>

                <li> <a href='#contact' className="mx-8 relative transition duration-500 ease-in-out">contact me</a></li>

            </ul>

            </div>

            </div>
        </div>

        
        </>
    )
}

export default NavBar


