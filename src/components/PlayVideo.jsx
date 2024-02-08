import React from "react";
import { calculate, date } from "../utils/ImpFunctions";

const PlayVideo = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className=" cursor-pointer ">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-xl  w-40 h-24 "
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-sm overflow-x-hidden">{title}</h3>
          <p className="text-xs">{channelTitle}</p>
          <div className="flex  space-x-1 text-xs">
            <p>{calculate(statistics?.viewCount)} views</p>
            <p>{date(publishedAt?.toString())}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
