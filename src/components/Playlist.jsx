import React from "react";
import { useSelector } from "react-redux";
import PlayVideo from "./PlayVideo";
import { Link } from "react-router-dom";
const Playlist = () => {
  const Videos = useSelector((store) => store?.videos?.Videos);
  if (!Videos) return null;
  return (
    <div className="flex mr-20 fixed flex-col space-y-2 translate-x-[950px]  overflow-x-hidden overflow-y-auto h-screen whitespace-nowrap">
      {Videos.map((video) => (
        <Link
          to={`/watch?v=${video.id}&id=${video?.snippet?.channelId}&likes=${video?.statistics?.likeCount}&title=${video?.snippet?.title}&views=${video?.statistics?.viewCount}&publishedAt=${video?.snippet?.publishedAt}&comment=${video?.statistics?.commentCount}`}
        >
          <PlayVideo key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Playlist;
