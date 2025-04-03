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
    <div className="py-12" id="experience">

<div className="text-center w-full my-10">
<h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  Experience
  </h1>
</div>
    

      <VerticalTimeline lineColor="white">
      {Data3.map((data, index) => (
        <VerticalTimelineElement
          date={data.date}
          icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          contentStyle={{ background: "transparent" }}
          key={index}
        >
          
          <div className="bg-gradient-to-r from-primary to-gray-100 bg-clip-text text-transparent">
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