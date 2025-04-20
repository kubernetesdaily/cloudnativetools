import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';

function BlogSection() {
  return (
    <div id="blog-section" className="bg-bgPrimary w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col w-full justify-center items-center gap-4 mx-auto mb-8">
        <h2 className="text-3xl font-bold text-primary">From the Blog</h2>
        <p className="text-grayFill max-w-2xl text-center">
          Latest insights, tutorials, and news about cloud native technologies.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
      
      {/* Optional: Add a button to view all blog posts */}
      {/* <div className="text-center mt-10">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
          View All Posts
        </a>
      </div> */}
    </div>
  );
}

export default BlogSection; 