import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddVideos } from "../utils/videosSlice";
const VideoContainer = () => {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  const dispatch = useDispatch();
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_KEY);
      if (!response.ok) {
        throw new Error("Cannot Fetch data");
      }
      const data = await response.json();
      setvideos(data?.items || []);
      dispatch(AddVideos(data?.items || []));
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <div
      className={`flex flex-wrap ${
        darkMode ? "dark:bg-gray-800 text-white" : ""
      }`}
    >
      {videos.length > 0 &&
        videos.map((video) => (
          <Link
            to={`/watch?v=${video.id}&id=${video?.snippet?.channelId}&likes=${video?.statistics?.likeCount}&title=${video?.snippet?.title}&views=${video?.statistics?.viewCount}&publishedAt=${video?.snippet?.publishedAt}&comment=${video?.statistics?.commentCount}`}
          >
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
