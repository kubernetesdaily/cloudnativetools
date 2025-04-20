import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="bg-bgGray rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
      <img 
        className="w-full h-48 object-cover object-center" 
        src={post.imageUrl} 
        alt={post.title} 
        onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/400x200?text=Image+Not+Found'}} // Fallback image
      />
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">{new Date(post.date).toLocaleDateString()}</p>
        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-grayFill/90 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard; 