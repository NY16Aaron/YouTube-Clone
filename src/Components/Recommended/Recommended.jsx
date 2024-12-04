import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { api_key, value_convertor } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${api_key}`;
    await fetch(relatedVideo_Url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((items, index) => {
        return (
          <Link
            to={`/video/${items.snippet.categoryId}/${items.id}`}
            key={index}
            className="side-video-list"
          >
            <img
              src={items.snippet.thumbnails.medium.url}
              alt="video thumbnail 1"
            />
            <div className="vid-info">
              <h4>{items.snippet.title}</h4>
              <p>{items.snippet.channelTitle}</p>
              <p>{value_convertor(items.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
