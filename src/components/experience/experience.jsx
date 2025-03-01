import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Data3 } from "../Data/data";

function Experience() {
  return (
    <div>
    <div style={{ fontFamily: "sans-serif" }} className="py-12" id="experience">
    <h1 className='font-bold text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl bg-gradient-to-t from-indigo-700 to-white bg-clip-text text-transparent text-center mb-8'>Experience</h1>
      <VerticalTimeline lineColor="white">
      {Data3.map((data, index) => (
        <VerticalTimelineElement
          date={data.date}
          icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          contentStyle={{ background: "transparent" }}
          key={index}
        >
          
          <div className="bg-gradient-to-r from-indigo-500 to-gray-100 bg-clip-text text-transparent">
          <h3>{data.name}</h3>
          <h4>{data.title}</h4>
          <p>
            {data.text}
          </p>
          </div>
          
        </VerticalTimelineElement>
))}
      </VerticalTimeline>
    </div>

    </div>
  );
}

export default Experience;