import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_API, GOOGLE_API_KEY, MAX_RESULTS } from "../utils/constants";
import { CHANNEL_API } from "../utils/constants";
import Comments from "./Comments";
import AboutChannel from "./AboutChannel";
import { calculate } from "../utils/ImpFunctions";
import Playlist from "./Playlist";
import VideoContainer from "./VideoContainer";
const WatchPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  const [searchParams] = useSearchParams();
  const [comment, setComment] = useState([]);
  const [logo, setLogo] = useState("");
  const getComments = async () => {
    try {
      const response = await fetch(
        COMMENTS_API + searchParams.get("v") + MAX_RESULTS + GOOGLE_API_KEY
      );
      if (!response.ok) {
        throw new Error("Cannot Fetch Comments");
      }
      const data = await response.json();
      setComment(data?.items || []);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  const getChannel = async () => {
    try {
      const response = await fetch(
        CHANNEL_API + searchParams.get("id") + "&key=" + GOOGLE_API_KEY
      );
      if (!response.ok) throw new Error("Cannot Fetch Channel");
      const data = await response.json();
      console.log(data?.items[0]);
      setLogo(data?.items[0]);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getComments();
    getChannel();

    dispatch(closeMenu());
  }, []);
  return (
    <div
      className={`watchpage relative flex w-screen  overflow-x-hidden whitespace-nowrap ${
        darkMode ? "dark:bg-gray-800 text-white shadow-2xl" : ""
      } `}
    >
      <div className="px-20 watchpage-div h-screen overflow-x-hidden whitespace-nowrap">
        <iframe
          className=" watchpage-video rounded-xl overflow-x-hidden whitespace-nowrap"
          width="850"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <AboutChannel
          logo={logo}
          likes={searchParams.get("likes")}
          title={searchParams.get("title")}
          views={searchParams.get("views")}
          time={searchParams.get("publishedAt")}
        />

        <h1 className="font-bold text-lg">
          {calculate(searchParams.get("comment"))} Comments
        </h1>
        <div className="flex flex-col w-[40%] whitespace-pre-line ">
          {comment.length > 0 &&
            comment.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
        </div>
      </div>
      {isSmallScreen && (
        <div className="flex-flex-col ">
          <h1 className="font-bold text-xl px-4">Playlist</h1>
          <VideoContainer />
        </div>
      )}
      <Playlist />
    </div>
  );
};

export default WatchPage;
