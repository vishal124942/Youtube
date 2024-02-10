import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-full maincontainer  sm:w-screen sm:overflow-x-hidden overflow-x-auto whitespace-nowrap overflow-y-auto h-screen">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
