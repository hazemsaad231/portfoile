import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { border } from "@chakra-ui/react";

function Experience() {
  return (
    <div id="experience">
    <div style={{ fontFamily: "serif" }} className="py-24">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center p-12 bg-gradient-to-r from-indigo-700 to-gray-100 bg-clip-text text-transparent tracking-[8px]">Experience</h1>
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          date="2024 - Present"
          icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          contentStyle={{ background: "transparent" }}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-gray-100 bg-clip-text text-transparent">
          <h3>Front-End Developer</h3>
          <h4>Freelance</h4>
          <p>
            Developing web interfaces using React.js, Tailwind CSS, and JavaScript.
            Enhancing user experience (UX/UI) and website performance.
          </p>
          </div>
          
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className=" text-white"
          date="2023 - 2024"
          icon={<FontAwesomeIcon icon={faBriefcase} color="white" />}
          contentStyle={{ background: "transparent" }}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-gray-100 bg-clip-text text-transparent">
          <h3 className="">Front-End Developer</h3>
          <h4 className="">Car E-Commerce Platform</h4>
          <p>
          Developed an online car marketplace with features for both admin and user roles.
           Implemented dynamic search and pagination. Integrated Firebase for data storage,
            allowing real-time updates and secure data management. Retrieved and displayed 
            car data via API for seamless user  interaction.


          </p>
          </div>
         
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="text-white" 
          date="2023 - 2024"
          icon={<FontAwesomeIcon icon={faBriefcase} color="white" />}
          contentStyle={{ background: "transparent"}}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-gray-100 bg-clip-text text-transparent">
          <h3 className="">Front-End Developer</h3>
          <h4 className="">Bookstore (Full Stack)</h4>
          <p>
            Developed an online bookstore using React, Node.js, and MongoDB.
            Built CRUD functionalities and API handling.
          </p>
          </div>
         
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>

    </div>
  );
}

export default Experience;