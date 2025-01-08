import React from "react";
import { ArrowUp, ArrowDown, MessageCircle, Gift, Share } from "lucide-react";

const PostActions = ({ votes, comments }) => {
  return (
    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
      {/* Upvote / Downvote */}
      <div className="flex items-center gap-1">
        <ArrowUp className="cursor-pointer hover:text-redditOrange" size={20} />
        <span>{votes}</span>
        <ArrowDown className="cursor-pointer hover:text-blue-500" size={20} />
      </div>

      {/* Comments */}
      <div className="flex items-center gap-1">
        <MessageCircle size={20} className="cursor-pointer" />
        <span>{comments}</span>
      </div>

      {/* Award */}
      <div className="flex items-center">
        <Gift size={20} className="cursor-pointer" />
      </div>

      {/* Share */}
      <div className="flex items-center">
        <Share size={20} className="cursor-pointer" />
        <span>Share</span>
      </div>
    </div>
  );
};

export default PostActions;


