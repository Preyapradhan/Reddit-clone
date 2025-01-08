import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MessageCircle,
  Share,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

function Posts({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("hot"); // Default filter is "hot"
  const [numPosts] = useState(5); // Always show 5 posts

  const fetchPosts = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(endpoint);
      const fetchedPosts = response.data.data.children.map((post) => ({
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        comments: post.data.num_comments,
        votes: post.data.ups,
        image: post.data.thumbnail.includes("http")
          ? post.data.thumbnail
          : "https://via.placeholder.com/100",
        createdAt: new Date(post.data.created_utc * 1000).toLocaleString(),
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const baseEndpoint = searchQuery
      ? `https://www.reddit.com/search.json?q=${searchQuery}&sort=${filter}&limit=${numPosts}`
      : `https://www.reddit.com/r/popular/${filter}.json?limit=${numPosts}`;
    fetchPosts(baseEndpoint);
  }, [searchQuery, filter, numPosts]);

  const formatVotes = (votes) => {
    if (votes >= 1000) {
      return (votes / 1000).toFixed(1) + "K"; // Format number in thousands
    }
    return votes;
  };

  if (loading) {
    return <div className="text-center py-6">Loading posts...</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Popular
        </h2>
        <div className="flex gap-4">
          {["hot", "new", "controversial", "rising", "top"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded-lg text-sm font-medium ${
                filter === type
                  ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col lg:flex-row items-center mb-6 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          {/* Post Thumbnail */}
          <img
            src={post.image}
            alt="Post thumbnail"
            className="w-20 h-20 rounded-lg object-cover mb-4 lg:mb-0 lg:mr-4"
          />

          {/* Post Content */}
          <div className="flex-1 group">
            {/* Post Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-redditOrange dark:group-hover:text-redditOrange transition-all">
              {post.title}
            </h3>
            {/* Post Metadata */}
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-redditOrange dark:group-hover:text-redditOrange transition-all">
              <span>Posted by {post.author}</span>
              <span className="ml-4">{post.createdAt}</span>
            </div>
          </div>

          {/* Right-Side Actions */}
          <div className="flex flex-row lg:flex-col items-center gap-4 ml-0 lg:ml-4 text-gray-600 dark:text-gray-400 mt-4 lg:mt-0">
            {/* Action Buttons */}
            <div className="flex items-center gap-1 cursor-pointer">
              <MessageCircle size={20} />
              <span className="text-sm">{post.comments}</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Share size={20} />
              <span className="text-sm">Share</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MoreHorizontal size={20} />
              <span className="text-sm">More</span>
            </div>
          </div>

          {/* Upvote/Downvote Section */}
          <div className="flex flex-col items-center gap-4 ml-4 text-gray-600 dark:text-gray-400 mt-4 lg:mt-0 border-l border-gray-300 dark:border-gray-600 pl-4">
            {/* Upvote/Downvote Tab Container */}
            <div className="flex flex-col items-center gap-1">
              <div className="bg-orange-200 dark:bg-orange-700 px-3 py-2 rounded-lg flex flex-col items-center">
                <ArrowUp
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-redditOrange dark:hover:text-redditOrange cursor-pointer transition-all"
                />
              </div>
              <span className="font-bold text-sm">{formatVotes(post.votes)}</span>
              <div className="bg-blue-200 dark:bg-blue-700 px-3 py-2 rounded-lg flex flex-col items-center">
                <ArrowDown
                  size={24}
                  className="text-gray-600 dark:text-gray-400 hover:text-redditBlue dark:hover:text-redditBlue cursor-pointer transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
