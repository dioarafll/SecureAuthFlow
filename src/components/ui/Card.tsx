// components/ui/Card.tsx

import React from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  authorName: string;
  authorImage: string;
  publishedDate: string;
  postTitle: string;
  postExcerpt: React.ReactNode;
  postLink: string;
};

const Card: React.FC<CardProps> = ({
  authorName,
  authorImage,
  publishedDate,
  postTitle,
  postExcerpt,
  postLink,
}) => {
  return (
    <div className="bg-white mb-3 rounded-lg space-y-4">
      {/* Blog Header */}
      <div className="flex items-center space-x-4">
        <img
          src={authorImage}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{authorName}</h3>
          <p className="text-sm text-gray-500">Published on {publishedDate}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div>
        <h4 className="text-lg font-bold text-gray-800">
          {/* Post Title as a Link */}
          <Link
            to={postLink} // Menggunakan postLink sebagai href
            className="hover:text-blue-500 transition-colors"
          >
            {postTitle}
          </Link>
        </h4>
        <p className="text-gray-600 mt-2">{postExcerpt}</p>
      </div>
    </div>
  );
};

export default Card;
