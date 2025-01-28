

const Experience = () => {

    return (
        <div className=" bg-black bg-opacity-95 text-white w-full text-start flex justify-center flex-col items-center h-[100vh]" id="experience">
             
            <div className="flex flex-col justify-center items-center h-[100%] gap-5">
            <h1 className="text-start text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-serif mb-3">Work Experience</h1>
                <div className="w-[60%]  h-fit  bg-yellow-200 hover:bg-yellow-400 rounded-xl">
                    <h1 className='text-start font-serif p-2 text-md sm:text-md md:text-md lg:text-xl xl:text-xl' >full stack</h1>
                    <p className="text-start p-2 text-[.5rem] sm:text-sm md:text-md lg:text-md xl:text-lg"> Full Stack Development refers to the development of both the front-end (client side) and back-end (server side) of a web application. A Full Stack Developer is skilled in handling all aspects of the web development process, from designing and building user interfaces . </p>
                </div>
                <div className="w-[60%]  h-fit  bg-red-200 hover:bg-red-400 rounded-xl">
                    <h1 className='text-start font-serif p-2 text-xl sm:text-xl md:text-xl lg:text-xl' >front end </h1>
                    <p className="text-start p-2 text-[.5rem] sm:text-sm md:text-lg lg:text-xl xl:text-lg"> Front-End Development is a part of web development that focuses on designing and developing the visual and user-facing portion of websites and applications. Front-End developers work with elements such as buttons, menus, images, and colors that users interact with directly. 
                         and JavaScript for adding interactivity and dynamic behavior to the website. </p></div>
                <div className="w-[60%]  h-fit  bg-green-200 hover:bg-green-400 rounded-xl">
                    <h1 className='text-start font-serif p-2 text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-xl' >ui ux design</h1>
                    <p className="text-start p-2 text-[.5rem] sm:text-sm md:text-lg lg:text-lg xl:text-lg"> UI design refers to the visual elements and interaction components of a product or application that users interact with directly. It focuses on the aesthetics and the layout of the interface, ensuring that the design is visually appealing, intuitive, and easy to use.  </p>
                </div>
              
              
               
            </div>
        </div>
    )
}


export default Experience