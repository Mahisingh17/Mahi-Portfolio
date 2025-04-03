import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUserAlt,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaMoon,
} from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import "./MobileNav.css";

const MobileNav = () => {
  const [theme, setTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on link click
  const handleMenuClick = () => {
    setIsOpen(false);
  };
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`mobile-navbar ${theme}`}>
        {/* Navbar Header */}
        <div className="mobile-navbar-header">
          <button className="menu-toggle-btn" onClick={handleToggleMenu}>
            {isOpen ? <AiOutlineMenuFold size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
          <span className="mobile-navbar-title">MY PORTFOLIO</span>

          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={handleTheme}>
            {theme === "light" ? (
                      <FaMoon size={22} color="#1e1e1e" />
                    ) : (
                      <BsFillSunFill size={22} color="white" />
                    )}
            {/* {theme === "dark-theme" ? <FaSun size={22} /> : <FaMoon size={22} />} */}
          </button>
        </div>

        {/* Menu Items */}
        {isOpen && (
          <div className="mobile-navbar-menu">
            <ul className="mobile-nav-items">
              {[
                { id: "home", icon: <FaHome />, label: "Home" },
                { id: "about", icon: <FaUserAlt />, label: "About" },
                { id: "work", icon: <FaBriefcase />, label: "Experience" },
                { id: "techstack", icon: <FaCode />, label: "Skills" },
                { id: "projects", icon: <FaProjectDiagram />, label: "PROJECTS" },
                { id: "education", icon: <FaGraduationCap />, label: "Education" },
                { id: "contact", icon: <FaEnvelope />, label: "Contact" },
              ].map((item) => (
                <li key={item.id} className="mobile-nav-link">
                  <Link to={item.id} spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
