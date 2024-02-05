import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-2 m-2 sticky top-0 z-1000 bg-white">
      <div className="flex col-span-1">
        <img
          onClick={handleMenuClick}
          className="h-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt=""
        />

        <img
          className="h-10 cursor-pointer"
          src="https://www.gstatic.com/youtube/img/promos/growth/e6cb4b33d9b818dc663e0774bf2e4f8c4366978032a880a4bc88eeaa79f4eb8c_244x112.webp"
          alt=""
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full "
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-16 h-11 border border-gray-400 p-2 rounded-r-full bg-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
