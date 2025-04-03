import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import Footer from "./pages/Footer/Footer"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css"
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <WorkExp />
          <Techstack />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#f8c246", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
