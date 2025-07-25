import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Data from '../Data/data';
import { Data2 } from '../Data/data';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List } from '@mui/material';

// ✅ تعديل هنا: مكون لتدوير السهم عند الفتح
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [active, setActive] = useState('react');
  const [isReact, setIsReact] = useState(true);
  const [isJs, setIsJs] = useState(false);
  const [expanded, setExpanded] = useState(null); // ✅ كل كارت حسب الـ ID

  const handleExpandClick = (id) => {
    console.log(`Toggling: ${id}`);
    setExpanded((prev) => (prev === id ? null : id));
  };
  

  const handleToggle = (type) => {
    setActive(type);
    if (type === 'react') {
      setIsReact(true);
      setIsJs(false);
    } else if (type === 'js') {
      setIsReact(false);
      setIsJs(true);
    } else {
      setIsReact(true);
      setIsJs(true);
    }
  };

  const renderProjects = (data) => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-10 gap-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {data.map((item) => (
        <Card sx={{ maxWidth: 400 , bgcolor:"transparent"}} key={item.id}>
         
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] object-center rounded-t-sm"
            />
          </motion.div>
           <motion.div className="flex justify-between p-2 bg-white rounded-b-sm">
            <motion.h1
              className="text-lg text-gray-600 font-bold"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {item.title}
            </motion.h1>
          </motion.div>
          <CardActions disableSpacing sx={{ bgcolor: 'white' }}>
            <div className="flex gap-2">
              <motion.a
                href={item.gitHub}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <FaGithub size={25} className="text-gray-600" />
              </motion.a>
              <motion.a
                href={item.link}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <RiExternalLinkLine size={25} className="text-gray-600" />
              </motion.a>
            </div>

            <ExpandMore
              expand={expanded === item.id}
              onClick={() => handleExpandClick(item.id)}
              aria-label="show more"
        
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded===item.id} timeout="auto" unmountOnExit sx={{ bgcolor: 'white' }}>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>
                {item.description}
              </Typography>
            <List>
              {item.skills}
            </List>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </motion.div>
  );

  return (
    <div className="pt-12 pb-4" id="projects">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl font-bold">
          Projects <span className="w-4 h-4 bg-primary inline-block rounded-full"></span>
        </h1>
        <p className="text-gray-500 text-sm md:text-xl mb-4">
          I have created many projects in my free time
        </p>
        <ul className="flex gap-4 p-4 text-white text-xl cursor-pointer">
          <li
            className={`${
              active === 'react'
                ? 'bg-gradient-to-r from-primary to-white transform -rotate-12 transition-all duration-500 w-24 text-center rounded-full'
                : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
            }`}
            onClick={() => handleToggle('react')}
          >
            React
          </li>
          <li
            className={`${
              active === 'js'
                ? 'bg-gradient-to-r from-primary to-white transform rotate-12 transition-all duration-500 w-24 text-center rounded-full'
                : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
            }`}
            onClick={() => handleToggle('js')}
          >
            JS
          </li>
          <li
            className={`${
              active === 'all'
                ? 'bg-gradient-to-r from-primary to-white transform rotate-12 transition-all duration-500 w-24 text-center rounded-full'
                : 'bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full'
            }`}
            onClick={() => handleToggle('all')}
          >
            All
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center py-12 px-4">
        {isReact && renderProjects(Data)}
        {isJs && renderProjects(Data2)}
      </div>
    </div>
  );
};

export default Projects;
