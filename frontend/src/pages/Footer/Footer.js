import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        {/* Footer Heading */}
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>Stay Connected</h1>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row text-center sitefooterbody">
          <div className="col-lg-12">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={26} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={26} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/mahima-m-7a4559213" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={26} className="social-icon" />
            </a>
            <a href="https://github.com/Mahisingh17" target="_blank" rel="noopener noreferrer">
              <FaGithub size={26} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="row text-center sitefooterbody">
          <div className="col-lg-12 mt-3">
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              &copy; 2025 Mahima M. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
