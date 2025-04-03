import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            {/* Work Experience 1 */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h4 className="vertical-timeline-element-title">
                Associate Software Developer
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Aroopa Technologies Pvt Ltd, Chennai
              </h5>
              <p>
                Working on the MERN stack to build scalable web applications.
                Collaborating with cross-functional teams to enhance the
                Applicant Tracking System (ATS) module and the Sidebar Menu. 
                Optimizing backend processes and implementing advanced data 
                management using MongoDB.
              </p>
            </VerticalTimelineElement>

            {/* Work Experience 2 */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h4 className="vertical-timeline-element-title">
                Software Development Intern
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Aroopa Technologies Pvt Ltd, Chennai
              </h5>
              <p>
                Gained hands-on experience working on various modules, including
                dynamic content rendering, form handling, and backend integration.
                Contributed to the implementation of a dynamic landing page with 
                MongoDB and ReactJS.
              </p>
            </VerticalTimelineElement>

            {/* Work Experience 3 */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h4 className="vertical-timeline-element-title">
                Web Development Intern
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                e-soft IT Solutions, Trichy
              </h5>
              <p>
                Assisted in the development of user interfaces using HTML, CSS,
                and JavaScript. Worked on integrating APIs and building reusable
                components. Focused on improving user experience and web
                performance.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
