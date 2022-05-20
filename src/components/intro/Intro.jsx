import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h3 className="intro-content">Herro my name is</h3>
          <h2 className="intro-name">Miran Salih</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">UI/UX designer</div>
              <div className="intro-title-item">Web developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
