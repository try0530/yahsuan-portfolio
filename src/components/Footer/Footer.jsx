import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &#169; 2025 Ya-Hsuan Yang</p>
      <div className="footer-contact">
        <a
          href="mailto:terry.yangyh@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-envelope i-decorate-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/yahsuan-yang-terry/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin i-decorate-white" />
        </a>
        <a href="https://github.com/try0530" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github i-decorate-white" />
        </a>
        <a href="tel:+15623992474">
          <i className="fa-solid fa-phone i-decorate-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
