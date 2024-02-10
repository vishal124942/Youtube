import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (isMenuOpen) {
    return (
      <div
        className={`${
          darkMode
            ? "dark:bg-gray-800 text-white shadow-2xl  border-r-2  border-white"
            : ""
        } p-6 cursor-pointer  bg-white w-48 h-screen overflow-y-auto hidden sm:block space-y-3`}
      >
        <ul className="space-y-4 text-md">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <h1 className="font-bold text-lg pt-5">You</h1>

        <ul className="space-y-4 text-sm">
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>watch later</li>
          <li>Your clips</li>
          <li>Liked videos</li>
        </ul>
        <h1 className="font-bold text-md pt-5">Explore</h1>
        <ul className="space-y-4 text-sm">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
        <h1 className="font-bold text-lg pt-5">Subscriptions</h1>
        <ul className="space-y-4 text-sm">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className=" font-bold text-lg pt-5 ">Watch Later</h1>
        <ul className="space-y-4 text-sm">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
