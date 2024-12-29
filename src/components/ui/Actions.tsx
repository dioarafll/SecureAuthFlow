// components/ui/Actions.tsx
import React from 'react';
import {
  FaThumbsUp,
  FaComment,
  FaBookmark,
  FaShareSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

type ActionsProps = {
  likes: number;
  comments: number;
  bookmarked: boolean;
  shares?: number; // Optional shares, default to 0
  readMoreLink?: string; // Optional, default to false (not shown)
};

const Actions: React.FC<ActionsProps> = ({
  likes,
  comments,
  bookmarked,
  shares = 0, // Default to 0 if not provided
  readMoreLink = '', // Default to an empty string if not provided
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-6">
        {/* Like Button */}
        <button className="interaction-button flex items-center space-x-2 text-gray-500">
          <FaThumbsUp />
          <span>{likes}</span> {/* Display the likes count */}
        </button>

        {/* Comment Button */}
        <button className="interaction-button flex items-center space-x-2 text-gray-500">
          <FaComment />
          <span>{comments}</span> {/* Display the comments count */}
        </button>

        {/* Bookmark Button */}
        <button
          className={`interaction-button flex items-center space-x-2 text-gray-500 ${bookmarked ? 'text-blue-500' : ''}`}
        >
          <FaBookmark />
        </button>

        {/* Share Button */}
        <button className="interaction-button flex items-center space-x-2 text-gray-500">
          <FaShareSquare />
          <span>{shares}</span> {/* Display the shares count */}
        </button>
      </div>

      {/* Read More Link */}
      {readMoreLink && (
        <Link
          to={readMoreLink}
          className="text-sm text-gray-500 hover:text-gray-700 transition"
        >
          Read More &rarr;
        </Link>
      )}
    </div>
  );
};

export default Actions;
