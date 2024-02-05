import React from "react";
import { date } from "../utils/constants";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  console.log(info);

  const calculate = (num) => {
    if (num > 1000000) {
      return `${Math.round(num / 1000000)}M `;
    } else if (num > 1000) {
      return `${Math.round(num / 1000)}K `;
    } else {
      return `${num} `;
    }
  };
  return (
    <div className="p-2 m-2 w-72 s  mx-auto whitespace-pre-line">
      <img className="rounded-xl" src={thumbnails.medium.url} alt={title} />
      <div>
        <h3 className="font-bold py-2">{title}</h3>
        <p className="text-sm text-gray-600 ">{channelTitle}</p>
        <div className="flex space-x-3 items-center">
          <p className="text-sm text-gray-600">
            {calculate(statistics?.viewCount)}views
          </p>
          <p className="text-sm text-grey-600">
            {date(publishedAt.toString())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
