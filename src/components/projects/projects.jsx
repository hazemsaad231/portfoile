// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { RiExternalLinkLine } from "react-icons/ri";
// import { FaGithub } from "react-icons/fa";
// import  {Js } from '../Data/data';
// import { Next } from '../Data/data';
// import  React  from '../Data/data';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { List } from '@mui/material';


// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";








// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const Projects = () => {
//   const [active, setActive] = useState('react');
//   const [isReact, setIsReact] = useState(true);
//   const [isJs, setIsJs] = useState(false);
//   const [isNext, setIsNext] = useState(false);
//   const [expanded, setExpanded] = useState(null); 

//   const handleExpandClick = (id) => {
//     console.log(`Toggling: ${id}`);
//     setExpanded((prev) => (prev === id ? null : id));
//   };
  

//   const handleToggle = (type) => {
//     setActive(type);
//     if (type === 'react') {
//       setIsReact(true);
//       setIsJs(false);
//       setIsNext(false);
//     } else if (type === 'js') {
//         setIsJs(true);
//       setIsReact(false);
//       setIsNext(false);
//     } else if (type === 'next') {
//       setIsNext(true);
//       setIsReact(false);
//       setIsJs(false);
//     }
//   };

//   const renderProjects = (data) => (
//     <motion.div
//       className="w-full"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: { staggerChildren: 0.2 },
//         },
//       }}
//     >


//  <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             spaceBetween={10}
//             slidesPerView={3}
//             loop
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//         {data.map((item) => (
//               <SwiperSlide>

//         <Card sx={{ maxWidth: 420 , bgcolor:"transparent" , margin:"auto" }} key={item.id}>
         
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-[340px] object-center rounded-t-sm"
//             />
//           </motion.div>
//            <motion.div className="flex justify-between p-2 bg-white rounded-b-sm">
//             <motion.h1
//               className="text-lg text-gray-600 font-bold"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {item.title}
//             </motion.h1>
//           </motion.div>
//           <CardActions disableSpacing sx={{ bgcolor: 'white' }}>
//             <div className="flex gap-2">
//               <motion.a
//                 href={item.gitHub}
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: 'spring', stiffness: 200 }}
//               >
//                 <FaGithub size={25} className="text-gray-600" />
//               </motion.a>
//               <motion.a
//                 href={item.link}
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ type: 'spring', stiffness: 200 }}
//               >
//                 <RiExternalLinkLine size={25} className="text-gray-600" />
//               </motion.a>
//             </div>

//             <ExpandMore
//               expand={expanded === item.id}
//               onClick={() => handleExpandClick(item.id)}
//               aria-label="show more"
        
//             >
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded===item.id} timeout="auto" unmountOnExit sx={{ bgcolor: 'white' }}>
//             <CardContent>
//               <Typography sx={{ marginBottom: 2 }}>
//                 {item.description}
//               </Typography>
//             <List>
//               {item.skills}
//             </List>
//             </CardContent>
//           </Collapse>
//         </Card>
      
//               </SwiperSlide>
//           ))}
//           </Swiper>

    
//     </motion.div>
//   )

  

//   return (
//     <div className="pt-12 pb-4" id="projects">
//       {/* <div className="flex flex-col justify-center items-center gap-2">
//         <h1 className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl font-bold">
//           Projects <span className="w-4 h-4 bg-primary inline-block rounded-full"></span>
//         </h1>
//         <ul className="flex gap-4 p-2 text-white text-xl cursor-pointer">
//           <li
//             className={`${
//               active === 'react'
//                 ? 'bg-gradient-to-r from-primary to-white transform scale-125 transition-all duration-700 w-24 text-center rounded-full'
//                 : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
//             }`}
//             onClick={() => handleToggle('react')}
//           >
//             React
//           </li>
         
//           <li
//             className={`${
//               active === 'js'
//                 ? 'bg-gradient-to-r from-primary to-white transform scale-125 transition-all duration-700 w-24 text-center rounded-full'
//                 : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
//             }`}
//             onClick={() => handleToggle('js')}
//           >
//             JS
//           </li>
//           <li
//             className={`${
//               active === 'next'
//                 ? 'bg-gradient-to-r from-primary to-white transform scale-125 transition-all duration-700 w-24 text-center rounded-full'
//                 : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
//             }`}
//             onClick={() => handleToggle('next')}
//           >
//             Next
//           </li>
//         </ul>
//       </div> */}

// {/* <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6, delay: 0.2 }} 
//           className="flex justify-center mb-12"
//         >
//           <div className="flex gap-2 bg-slate-800/50 p-1.5 rounded-full backdrop-blur-sm border border-slate-700">
//             {tabs.map(tab => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
//                     activeTab === tab.id 
//                       ? 'text-white' 
//                       : 'text-slate-400 hover:text-slate-200'
//                   }`}
//                 >
//                   {activeTab === tab.id && (
//                     <motion.div
//                       layoutId="activeProjectTab"
//                       className="absolute inset-0 bg-primary rounded-full"
//                       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     />
//                   )}
//                   <Icon className="w-5 h-5 relative z-10" />
//                   <span className="font-medium relative z-10">{tab.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div> */}
//       <div className="flex flex-col justify-center items-center p-4 md:p-8">
//         {isReact && renderProjects(React)}
//         {isJs && renderProjects(Js)}
//         {isNext && renderProjects(Next)}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import  {Js } from '../Data/data';
import { Next } from '../Data/data';
import  React  from '../Data/data';


const Projects = () => {
  const [active, setActive] = useState('react');
  const [expanded, setExpanded] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const tabs = [
    { id: 'react', label: 'React' },
    { id: 'js', label: 'JS' },
    { id: 'next', label: 'Next' }
  ];

  // Get current projects based on active tab
  const getCurrentProjects = () => {
    switch (active) {
      case 'react':
        return React;
      case 'js':
        return Js;
      case 'next':
        return Next;
      default:
        return React;
    }
  };

  const currentProjects = getCurrentProjects();

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset slide and expanded when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
    setExpanded(null);
  }, [active]);

  const maxSlide = Math.max(0, currentProjects.length - slidesPerView);

  const handleExpandClick = (id) => {
    console.log(`Toggling: ${id}, Current: ${expanded}`);
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleToggle = (type) => {
    setActive(type);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="pt-12 pb-10 min-h-screen" id="projects">
      {/* Header */}
<div className="text-center w-full my-10">
<h1 
   className="bg-gradient-to-r from-primary to-white  pb-3 bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
   Projects <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
</div>

      {/* Tab Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
        className="flex justify-center my-12"
      >
        <div className="flex gap-2 bg-slate-800/50 p-1.5 rounded-full backdrop-blur-sm border border-slate-700">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleToggle(tab.id)}
              className={`relative px-8 py-3 rounded-full transition-all duration-300 ${
                active === tab.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {active === tab.id && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="font-medium relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Slider */}
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-0 md:gap-5"
                animate={{
                  x: `-${currentSlide * (100 / slidesPerView)}%`
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {currentProjects.map((item) => {
                  const isExpanded = expanded === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 24 / slidesPerView}px)` }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <motion.div
                          className="overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-[340px] object-center"
                            loading="lazy"
                          />
                        </motion.div>

                        {/* Title */}
                        <div className="p-4 flex-1 flex flex-col">
                          <motion.h2
                            className="text-xl text-gray-800 font-bold mb-4"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.title}
                          </motion.h2>

                          {/* Links and Expand */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex gap-3">
                              <motion.a
                                href={item.gitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="text-gray-600 hover:text-blue-500"
                              >
                                <Github size={25} />
                              </motion.a>
                              <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="text-gray-600 hover:text-blue-500"
                              >
                                <ExternalLink size={25} />
                              </motion.a>
                            </div>

                            <button
                              onClick={() => handleExpandClick(item.id)}
                              className="text-gray-600 hover:text-blue-500 transition-colors"
                              aria-label="show more"
                            >
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown size={28} />
                              </motion.div>
                            </button>
                          </div>

                          {/* Collapsible Content */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <p className="text-gray-700 text-sm mb-3">
                                    {item.description}
                                  </p>
                                  {Array.isArray(item.skills) && item.skills.length > 0 && (
                                    <div>
                                      <p className="text-gray-600 text-xs font-semibold mb-2">Technologies:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, idx) => (
                                          <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                                          >
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            {currentProjects.length > slidesPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${
                    currentSlide === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-primary hover:border-primary'
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlide}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${
                    currentSlide === maxSlide
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-primary hover:border-primary'
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {currentProjects.length > slidesPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;