import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
const NavBar = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

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



    return (
        
        <>

<div className="fixed top-0 p-3 w-full rounded-full">


        <div className=' flex items-center justify-around w-full' style={{fontFamily:"cursive"}}>

        {isDarkMode ?
         <MdOutlineLightMode className='text-2xl mt-1 cursor-pointer' onClick={toggleMode} />
         :
         <MdOutlineDarkMode className='text-2xl mt-1 cursor-pointer' onClick={toggleMode} />}



           <h1 className="tracking-[15px] text-green-600">
            hazem
           </h1>
       <div className="hidden sm:hidden md:hidden lg:block xl:block">
            <ul className="flex gap-6 text-md sm:text-md md:text-md lg:text-md p-4">
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


