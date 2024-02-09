import React from "react";
import { calculate, date } from "../utils/ImpFunctions";
import IMG from "../img/share.png";
import DOWN from "../img/download.png";
import LIKE from "../img/like.png";
import DISLIKE from "../img/dislike.png";
const AboutChannel = ({ logo, likes, views, time, title }) => {
  return (
    <div className=" about py-4  space-y-3">
      <h1 className="font-bold text-xl p-1 w-[70%] whitespace-pre-line">
        {title}
      </h1>
      <div className="flex gap-x-40 ">
        <div className="flex space-x-2">
          <img
            className="w-11 h-11 rounded-full"
            src={logo?.snippet?.thumbnails?.default?.url}
            alt="Channel logo"
          />
          <div>
            <h1 className="font-bold text-lg  ">{logo?.snippet?.title}</h1>
            <p className="text-xs text-gray-600">
              {calculate(logo?.statistics?.subscriberCount)} subscribers
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="h-10 w-24 bg-black font-bold text-sm rounded-3xl text-white cursour-pointer hover:bg-slate-800">
            Subscribe
          </button>
          <div className="flex items-center  space-x-2 bg-gray-100 hover:bg-gray-200 rounded-3xl px-4 h-9">
            <div className="flex ">
              <img className="w-6 h-6 cursor-pointer" src={LIKE} alt="" />
              <h1>{calculate(likes)}</h1>
            </div>
            <img
              className="w-6 h-6 cursor-pointer translate-y-1"
              src={DISLIKE}
              alt=""
            />
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full w-24 h-9 hover:bg-gray-200 cursor-pointer">
            <img src={IMG} alt="" className="h-5 w-5 mx-1 translate-x-2" />
            <h1 className="font-bold text-sm">Share</h1>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full w-32 h-9 hover:bg-gray-200 cursor-pointer">
            <img src={DOWN} alt="" className="h-5 w-5 mx-1 translate-x-2" />
            <h1 className="font-bold text-sm">Download</h1>
          </div>
        </div>
      </div>
      {/* likes description */}
      <div className="rounded-xl p-3 w-[850px] overflow-y-hidden bg-gray-200 whitespace-pre-line text-sm">
        <div className="flex space-x-2">
          <h1 className="font-bold">{calculate(views)} views</h1>
          <h1 className="font-bold">{date(time?.toString())}</h1>
        </div>
        <p clas>{logo?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default AboutChannel;
