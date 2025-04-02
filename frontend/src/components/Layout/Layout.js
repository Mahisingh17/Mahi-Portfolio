import React from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
const Layout = () => {
  return (
    <>
      <header className="header">
        <Menus />
      </header>
      <main className="container">
        <Home />
      </main>
    </>
  );
};

const Menus = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme toggle
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="menu-container">
      {/* Theme Button */}
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <FaMoon size={25} color="#1e1e1e" />
        ) : (
          <BsFillSunFill size={30} color="white" />
        )}
      </div>
      <div>
        <ul className="nav-items">
          {menuItems.map(({ to, label }) => (
            <li key={to} className="nav-link" onClick={() => handleScroll(to)}>
              <span style={{fontSize:"14px", fontFamily: '"Playfair Display", "Lora", serif'}}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const menuItems = [
  { to: "home", label: "HOME" },
  { to: "about", label: "ABOUT" },
  { to: "work", label: "EXPERIENCE" },
  { to: "techstack", label: "SKILLS" },
  { to: "projects", label: "PROJECTS" },
  { to: "education", label: "EDUCATION" },
  { to: "contact", label: "CONTACT" }
];

export default Layout;
