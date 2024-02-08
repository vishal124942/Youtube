import React from "react";
import { date } from "../utils/ImpFunctions";
const Comments = ({ comment }) => {
  return (
    <div className="flex items-center space-x-5 py-4 ">
      <img
        className="rounded-full h-10 w-10"
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="Profile Logo"
      />

      <div className="flex flex-col items-start ">
        <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-sm">
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </h2>
          <h2 className="text-xs">
            {date(
              comment?.snippet?.topLevelComment?.snippet?.publishedAt?.toString()
            )}
          </h2>
        </div>
        <p className="text-sm ">
          {comment.snippet.topLevelComment.snippet.textDisplay}
        </p>
      </div>
    </div>
  );
};

export default Comments;
