import "./about.css";

const About = () => {
  return (
    <body>
      <div className="about">
        <div className="about-text">
          <h3 className="about-text-head">About Me</h3>
          <p className="about-text-info">
            Hello im Miran Salih, I am an interaction design student at Umeå
            university. I have always loved building things and I have a passion
            for game, be playing them or creating them. Im currently working on
            my game developer skill and trying to create games that people can
            enjoy.
          </p>
          <p className="about-text-info">
            This website has been created by me using <b>react</b> in order to
            learn more about web development and test the skill I already have.
          </p>
          <div className="about-text-skills">
            <div className="about-skills-head">Skills</div>
            <div className="about-skills-skills">
              Some of my skills:
              <p className="skills">
                C, C#, Java, Javascript, Unity, React, Css and Html
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
