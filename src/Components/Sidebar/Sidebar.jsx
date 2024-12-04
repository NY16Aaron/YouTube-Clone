import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, catagory, setCatagory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-link">
        <div
          className={`side-link ${catagory == 0 ? "active" : ""}`}
          onClick={() => setCatagory(0)}
        >
          <img src={home} alt="home image" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${catagory == 20 ? "active" : ""}`}
          onClick={() => setCatagory(20)}
        >
          <img src={game_icon} alt="gaming image" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${catagory == 2 ? "active" : ""}`}
          onClick={() => setCatagory(2)}
        >
          <img src={automobiles} alt="automobiles image" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${catagory == 17 ? "active" : ""}`}
          onClick={() => setCatagory(17)}
        >
          <img src={sports} alt="sports image" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${catagory == 24 ? "active" : ""}`}
          onClick={() => setCatagory(24)}
        >
          <img src={entertainment} alt="entertainment image" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${catagory == 28 ? "active" : ""}`}
          onClick={() => setCatagory(28)}
        >
          <img src={tech} alt="tech image" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${catagory == 10 ? "active" : ""}`}
          onClick={() => setCatagory(10)}
        >
          <img src={music} alt="music image" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${catagory == 22 ? "active" : ""}`}
          onClick={() => setCatagory(22)}
        >
          <img src={blogs} alt="bolgs image" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${catagory == 25 ? "active" : ""}`}
          onClick={() => setCatagory(25)}
        >
          <img src={news} alt="news image" />
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="profile image" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="profile image" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="profile image" />
          <p>GreatStack</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="profile image" />
          <p>Teddy Afro</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="profile image" />
          <p>Gigi</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
