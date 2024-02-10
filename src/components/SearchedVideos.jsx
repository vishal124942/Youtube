import React from "react";
import { useSelector } from "react-redux";
import SearchedVideosCard from "./SearchedVideosCard";
import { Link } from "react-router-dom";

const SearchedVideos = () => {
  const searchVideos = useSelector((store) => store.SuggVideos.SuggestedVideos);
  return (
    <div>
      {searchVideos.map((video) => (
        <Link to={"/"}>
          <SearchedVideosCard />
        </Link>
      ))}
    </div>
  );
};

export default SearchedVideos;
