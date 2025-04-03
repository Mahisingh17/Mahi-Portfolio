import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Education
      </h2>
      <hr />
      <VerticalTimeline lineColor="#1e1e2c">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2024 - Present"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h5 className="vertical-timeline-element-title">
            M.E. Computer Science and Engineering
          </h5>
          <p className="vertical-timeline-element-subtitle">
            Kalaignarkarunanidhi Institute of Technology, Coimbatore
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2020 - 2024"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h5 className="vertical-timeline-element-title">
            B.E. Computer Science and Engineering
          </h5>
          <p className="vertical-timeline-element-subtitle">
            Kalaignarkarunanidhi Institute of Technology, Coimbatore
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2018 - 2020"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h5 className="vertical-timeline-element-title">
            Higher Secondary Certificate (HSC)
          </h5>
          <p className="vertical-timeline-element-subtitle">
            Government Higher Secondary School, Krishnagiri
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2017 - 2018"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h5 className="vertical-timeline-element-title">
            Secondary School Leaving Certificate (SSLC)
          </h5>
          <p className="vertical-timeline-element-subtitle">
            Government Girls High School, Krishnagiri
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
