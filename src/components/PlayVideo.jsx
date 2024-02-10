import React from "react";
import { calculate, date } from "../utils/ImpFunctions";
import { useSelector } from "react-redux";

const PlayVideo = ({ info }) => {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div
      className={`${
        darkMode ? "dark:bg-slate-800 flex items-center py-1 " : ""
      }flex bg-white items-center space-x-2 py-1 `}
    >
      <img
        className="rounded-xl  w-40 h-24 "
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-sm  overflow-x-hidden whitespace-pre-line">
          {title}
        </h3>
        <p className="text-xs">{channelTitle}</p>
        <div className="flex  space-x-1 text-xs">
          <p>{calculate(statistics?.viewCount)} views</p>
          <p>{date(publishedAt?.toString())}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
