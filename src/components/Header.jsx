import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const SearchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
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
  return (
    <div className="flex flex-col ">
      <div className=" grid grid-flow-col p-2 m-2 sticky z-1000 top-0 z-1000 bg-white">
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
      <div className=" suggestion   shadow-2xl rounded-xl bg-white translate-x-[470px] w-[37%] space-y-2  translate-y-16">
        {showSuggestions &&
          suggestions.map((suggestion) => (
            <div className="flex items-center space-x-2 px-4 h-8 cursor-pointer hover:bg-gray-100">
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
