import React from "react";
import { calculate, date } from "../utils/ImpFunctions";
import IMG from "../img/share.png";
import DOWN from "../img/download.png";
import LIKE from "../img/like.png";
import DISLIKE from "../img/dislike.png";
import { useSelector } from "react-redux";
import SEND from "../img/send.png";
import BLUEDOWN from "../img/direct-download.png";
import BLUELIKE from "../img/blueLike.png";
import REDDISLIKE from "../img/RedDislike.png";
import ARROW from "../img/arrow.png";
import { useNavigate } from "react-router-dom";
import BLUEARROW from "../img/arrows.png";
const AboutChannel = ({ logo, likes, views, time, title }) => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  return (
    <div className=" about py-4  space-y-3">
      <h1 className=" abouttitle font-bold text-xl p-1 w-[70%] whitespace-pre-line">
        {title}
      </h1>
      <div className="flex gap-x-40  aboutstats">
        <div className="flex space-x-2 ml-auto">
          <img
            className="w-11 h-11 rounded-full"
            src={logo?.snippet?.thumbnails?.default?.url}
            alt="Channel logo"
          />
          <div>
            <h1 className="font-bold text-lg  ">{logo?.snippet?.title}</h1>
            <p
              className={`${
                darkMode
                  ? "dark:bg-slate-800 text-sm "
                  : "text-sm text-gray-600"
              }`}
            >
              {calculate(logo?.statistics?.subscriberCount)} subscribers
            </p>
          </div>
        </div>
        <div className=" statschannel flex items-center space-x-3 mr-auto pr-auto">
          <div
            onClick={() => navigate("/")}
            className={`${
              darkMode ? "dark:bg-black text-white  " : ""
            }   flex lg:hidden   items-center justify-center arrow   space-x-2 bg-gray-100 rounded-full w-12 h-8 hover:bg-gray-200 cursor-pointer`}
          >
            <img
              src={darkMode ? BLUEARROW : ARROW}
              alt=""
              className="h-5 w-5 "
            />
          </div>
          <button className="h-10 w-24 bg-black font-bold text-sm rounded-3xl text-white cursour-pointer hover:bg-slate-800">
            Subscribe
          </button>
          <div
            className={`${
              darkMode ? "dark:bg-black  text-white  " : ""
            }flex items-center  space-x-2 bg-gray-100 hover:bg-gray-200 rounded-3xl px-4 h-9`}
          >
            <div className="flex ">
              <img
                className="w-6 h-6 cursor-pointer"
                src={darkMode ? BLUELIKE : LIKE}
                alt=""
              />
              <h1>{calculate(likes)}</h1>
            </div>
            <img
              className="w-6 h-6 cursor-pointer "
              src={darkMode ? REDDISLIKE : DISLIKE}
              alt=""
            />
          </div>

          <div
            className={`${
              darkMode ? "dark:bg-black text-white  " : ""
            } flex items-center   share space-x-2 bg-gray-100 rounded-full w-24 h-9 hover:bg-gray-200 cursor-pointer`}
          >
            <img
              src={!darkMode ? IMG : SEND}
              alt=""
              className="h-5 w-5 mx-1 translate-x-2"
            />
            <h1 className=" font-bold text-sm">Share</h1>
          </div>
          <div
            className={`${
              darkMode ? "dark:bg-black   text-white  " : ""
            }flex items-center space-x-2 download bg-gray-100 rounded-full w-32 h-9 hover:bg-gray-200 cursor-pointer`}
          >
            <img
              src={!darkMode ? DOWN : BLUEDOWN}
              alt=""
              className="h-5 w-5 mx-1 translate-x-2"
            />
            <h1 className="font-bold text-sm">Download</h1>
          </div>
        </div>
      </div>
      {/* likes description */}
      <div
        className={`${
          darkMode
            ? "dark:bg-gray-800 text-white shadow-xl border-2 border-white"
            : ""
        } hidden sm:block rounded-xl p-3 w-[850px] overflow-y-hidden mx-auto px-auto bg-gray-200 whitespace-pre-line text-sm`}
      >
        <div className="flex space-x-2">
          <h1 className="font-bold">{calculate(views)} views</h1>
          <h1 className="font-bold">{date(time?.toString())}</h1>
        </div>
        <p>{logo?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default AboutChannel;
