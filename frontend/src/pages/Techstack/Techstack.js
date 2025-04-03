import React from "react";
import "./Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";
import { Tooltip } from "antd";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Skills
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Proficient in programming languages, frameworks, databases, front-end & back-end tools, and APIs powering modern applications.
          </p>
        </RubberBand>
        <div className="row">
  {TechstackList.map((tech) => (
    <Fade left key={tech._id}>
      <div className="col-md-3">
        <div className="card m-2">
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex flex-column align-items-center">
                {/* Render the icon correctly */}
                <div className="align-self-center">
                  {tech.icon && React.createElement(tech.icon, { className: "tech-icon" })}
                </div>

                <div className="media-body text-center">
                  <Tooltip title={tech.name}>
                    <h5 className="text-truncate w-100" style={{ maxWidth: "150px" }}>
                      {tech.name}
                    </h5>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  ))}
</div>
      </div>
    </>
  );
};

export default Techstack;
