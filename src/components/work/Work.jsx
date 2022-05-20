import "./work.css";
import Feed from "../../img/feed.png";
import Feed2 from "../../img/feed2.png";
import Profile from "../../img/profile.png";

const Work = () => {
  return (
    <div className="work">
      <div className="work-left">
        <h3 className="work-header">Work</h3>
        <p className="work-p">Here is some projekcts I have worked on.</p>
      </div>
      <div className="work-right">
        <div className="img-div">
          <h4 className="img-div-header">Twitter clone</h4>
          <div className="img-list-div">
            <div className="img-moving">
              <div className="img-list">
                <img src={Feed} alt="" className="feed-img" />
              </div>
              <div className="img-list">
                <img src={Feed2} alt="" className="feed-img" />
              </div>
              <div className="img-list">
                <img src={Profile} alt="" className="feed-img" />
              </div>
            </div>
          </div>
          <p className="img-div-text">
            This project was done with three other people. The project was a
            socialmedia platfrom. It could be called a twitter clone where users
            could make posts and comment on others post. During this project I
            was mostly working on parts of the application that was related to
            the following system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
