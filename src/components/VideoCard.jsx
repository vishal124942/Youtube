import React from "react";
import { date } from "../utils/ImpFunctions";
import { calculate } from "../utils/ImpFunctions";
import { useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  return (
    <div className=" video-info p-2 m-2 w-72 mx-auto whitespace-pre-line ">
      <img
        className="image rounded-xl"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className={`  ${darkMode ? "dark:bg-gray-800  text-white" : ""}`}>
        <h3 className="font-bold py-2 title sm:whitespace-pre-line">{title}</h3>
        <p className="text-sm  ">{channelTitle}</p>
        <div
          className={`flex space-x-3 items-center ${
            darkMode ? "dark:bg-gray-800  text-white" : ""
          }`}
        >
          <p className="text-sm ">{calculate(statistics?.viewCount)}views</p>
          <p className="text-sm ">{date(publishedAt?.toString())}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
