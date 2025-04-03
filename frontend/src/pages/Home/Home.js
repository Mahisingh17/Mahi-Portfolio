import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Mahima_Resume.pdf";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                    "React JS Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9150436521"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Mahima.pdf">
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
