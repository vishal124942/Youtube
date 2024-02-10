import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  GOOGLE_API_KEY,
  SEARCH_API,
  SUGGESTED_VIDEOS_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { AddSuggVideos } from "../utils/suggestedVideosSlice";
import SLEEP from "../img/sleep-mode.png";
import DARK from "../img/dark-mode.png";
import { toggleDarkMode } from "../utils/DarkModeSlice";
const Header = () => {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  const SearchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [isSearching, setisSearching] = useState(true);
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache[searchQuery]) {
        setsuggestions(SearchCache[searchQuery] || []);
      } else {
        getSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearch = async () => {
    await fetch(SEARCH_API + searchQuery)
      .then((data) => data.json())
      .then((response) => {
        setsuggestions(response[1] || []);
        dispatch(
          cacheResults({
            [searchQuery]: response[1],
          })
        );
      })
      .catch((e) => console.log(e));
  };
  const getSuggestedVideos = async (keyword) => {
    setisSearching(true);
    try {
      const data = await fetch(
        SUGGESTED_VIDEOS_API + keyword + "&key=" + GOOGLE_API_KEY
      );
      const json = await data.json();
      console.log(json?.items);
      dispatch(AddSuggVideos(json?.items || []));
    } catch (error) {
      console.log(error);
      setisSearching(false);
    }
  };
  const handleSuggestionClick = (keyword) => {
    setSearchQuery(keyword);
    setshowSuggestions(false);
    getSuggestedVideos(keyword);
  };

  const handleSearchButtonClick = () => {
    handleSuggestionClick(searchQuery);
    setisSearching(false);
  };
  return (
    <div
      className={`header flex flex-col ${darkMode ? "dark:bg-gray-800" : ""} `}
    >
      <div
        className={` grid grid-flow-col p-2 m-2 sticky z-1000 top-0 z-1000 bg-white${
          darkMode ? "dark:bg-gray-800" : ""
        }`}
      >
        <div className="flex header ">
          <img
            onClick={handleMenuClick}
            className="h-10 cursor-pointer rounded-full  hidden sm:block "
            src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            alt=""
          />

          <img
            className="h-10 cursor-pointer w-full sm:w-auto max-w-24"
            src="https://www.gstatic.com/youtube/img/promos/growth/e6cb4b33d9b818dc663e0774bf2e4f8c4366978032a880a4bc88eeaa79f4eb8c_244x112.webp"
            alt=""
          />
        </div>
        <div className="col-span-10  justify-center lg:flex hidden sm:block">
          {!searchQuery ? (
            <input
              type="text"
              className="w-1/2 border border-gray-400 p-2 rounded-l-full "
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setshowSuggestions(true)}
              onBlur={() => setshowSuggestions(false)}
            />
          ) : (
            <>
              <input
                type="text"
                className="w-1/2 border border-gray-400 p-2 rounded-l-full "
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setshowSuggestions(true)}
                onBlur={() => setshowSuggestions(false)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute translate-x-52 translate-y-2 cursor-pointer"
                onClick={() => {
                  setSearchQuery("");
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={` w-16 h-11 border cursor-pointer border-gray-400 p-2 rounded-r-full bg-gray-100 ${
              !isSearching ? "disabled" : ""
            }`}
            onClick={() => {
              handleSearchButtonClick();
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="buttons text-white  flex items-center space-x-2 col-span-1 ml-auto">
          <div onClick={() => dispatch(toggleDarkMode())}>
            <img
              className="bg-white rounded-full h-8 cursor-pointer"
              src={darkMode ? SLEEP : DARK}
              alt=""
            />
          </div>

          <img
            className="h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className=" suggestion   shadow-2xl rounded-xl bg-white translate-x-[470px] w-[37%] space-y-2  translate-y-16">
        {showSuggestions &&
          suggestions.map((suggestion) => (
            <div
              onClick={() => {
                handleSuggestionClick(suggestion);
              }}
              className="flex items-center space-x-2 px-4 h-8 cursor-pointer hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h1 className="font-bold text-md  ">{suggestion}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
