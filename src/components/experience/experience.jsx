import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div id="experience">
    <div style={{ fontFamily: "cursive" }}>
      <h1 className="text-4xl text-center py-20 text-blue-700">Experience</h1>
      <VerticalTimeline lineColor="#2563EB">
        <VerticalTimelineElement
          date="2024 - Present"
          icon={<FontAwesomeIcon icon={faBriefcase} color="blue" />}
          className="text-blue-700 "
        >
          <div className="">
          <h3>Front-End Developer</h3>
          <h4>Freelance</h4>
          <p>
            Developing web interfaces using React.js, Tailwind CSS, and JavaScript.
            Enhancing user experience (UX/UI) and website performance.
          </p>
          </div>
          
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className=" text-blue-700"
          date="2023 - 2024"
          icon={<FontAwesomeIcon icon={faBriefcase} color="blue" />}
        >
          <h3 className="">Front-End Developer</h3>
          <h4 className="">Car E-Commerce Platform</h4>
          <p>
            Built an online car marketplace with search and pagination features.
            Fetched and displayed data dynamically from an API.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="text-blue-700"
          date="2023 - 2024"
          icon={<FontAwesomeIcon icon={faBriefcase} color="blue" />}
        >
          <h3 className="">Front-End Developer</h3>
          <h4 className="">Bookstore (Full Stack)</h4>
          <p>
            Developed an online bookstore using React, Node.js, and MongoDB.
            Built CRUD functionalities and API handling.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>

    </div>
  );
}

export default Experience;