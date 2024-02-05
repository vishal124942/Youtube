import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const collapse = () => {
    dispatch(toggleMenu());
  };

  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    await fetch(YOUTUBE_API_KEY)
      .then((response) => response.json())
      .then((data) => setvideos(data?.items))
      .catch((error) => console.log(error));
  };
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} onClick={collapse}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
