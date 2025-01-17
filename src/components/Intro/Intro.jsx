import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-info">
        <div className="intro-detail">
          <h1>YA-HSUAN YANG, aka Terry.</h1>
          <h4>Front-End Developer</h4>
          <h4>
            Human Computer Interaction, MS | Rochester Institute of Technology
          </h4>
          <p>&#9866;</p>
          <div className="intro-contact">
            <a href="mailto:yy9451@rit.edu" target="_blank" rel="noreferrer">
              <i className="fa-regular fa-envelope i-decorate-white" />
              yy9451@rit.edu
            </a>
            <a
              href="https://www.linkedin.com/in/yahsuan-yang-terry/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin i-decorate-white" />
              /yahsuan-yang-terry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
