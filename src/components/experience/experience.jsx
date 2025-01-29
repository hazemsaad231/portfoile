import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss'
import separator from '../../assets/images/separator.webp'

function Experience() {
  return (
    <div id="experience">
    <div className="bg-black bg-opacity-95" style={{ fontFamily: "cursive" }}>
      <h1 className="text-4xl text-center py-10 text-green-600">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          date="2024 - Present"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
          <p>
            Developing web interfaces using React.js, Tailwind CSS, and JavaScript.
            Enhancing user experience (UX/UI) and website performance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Dashboard Project</h4>
          <p>
            Developed a user dashboard with login functionality.
            Integrated with an API for data management.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Car E-Commerce Platform</h4>
          <p>
            Built an online car marketplace with search and pagination features.
            Fetched and displayed data dynamically from an API.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Bookstore (Full Stack)</h4>
          <p>
            Developed an online bookstore using React, Node.js, and MongoDB.
            Built CRUD functionalities and API handling.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>




<div>
   <img src={separator} alt=""  className='w-full h-5'/>
</div>

    </div>
  );
}

export default Experience;