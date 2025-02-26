import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

import resume from "../../assets/documents/resume.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Ya-Hsuan</h3>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={300}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={300}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={300}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={300}
          className="desktopMenuListItem"
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="educations"
          spy={true}
          smooth={true}
          offset={-50}
          duration={300}
          className="desktopMenuListItem"
        >
          Education
        </Link>
      </div>
      <button
        className="desktopMenuBtn resume-btn"
        onClick={() => {
          window.open(resume, "_blank");
        }}
      >
        <i className="fa-regular fa-file" />
        Resume
      </button>

      <div className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa-solid fa-bars" />
      </div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="educations"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Education
        </Link>
        <Link
          className="listItem"
          onClick={() => {
            window.open(resume, "_blank");
          }}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
