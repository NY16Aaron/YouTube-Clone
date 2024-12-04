import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  const [catagory, setCatagory] = useState(0);
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        catagory={catagory}
        setCatagory={setCatagory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed catagory={catagory} />
      </div>
    </>
  );
};

export default Home;
