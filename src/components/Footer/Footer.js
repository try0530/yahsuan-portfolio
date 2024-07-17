import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &#169; 2024 Ya-Hsuan Yang, All right received</p>
      <div className="footer-contact">
        <a
          href="mailto:s900003terry@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-envelope i-decorate-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yahsuan-yang-terry/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin i-decorate-white"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github i-decorate-white"></i>
        </a>
        <a href="tel:+15623992474">
          <i className="fa-solid fa-phone i-decorate-white"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
