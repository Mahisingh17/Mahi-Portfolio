import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from "../../assets/images/mahi.png";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={profilePic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h2 className="col-10 mt-3 mb-1 text-center text-uppercase">About Me</h2>
              <p>
                I am a highly skilled Full Stack Developer with expertise in designing, developing, and deploying scalable web applications using modern technologies like React JS, Node JS, Express JS, and MongoDB. My technical proficiency extends to MongoDB Atlas Search, AG Grid, and Azure DevOps, enabling me to craft intuitive, efficient, and high-performance solutions with seamless user experiences.  
              </p>
              <p>
                At Aroopa Technologies, I have actively contributed to enhancing multiple projects, including Applicant Tracking Systems (ATS), dynamic form modules, and interactive landing page integrations. My strong problem-solving skills, attention to detail, and passion for innovation drive me to build impactful, robust, and scalable software solutions that enhance workflow efficiency, user engagement, and overall digital transformation. I am constantly learning and evolving to stay ahead in the rapidly changing tech landscape.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};


export default About;
