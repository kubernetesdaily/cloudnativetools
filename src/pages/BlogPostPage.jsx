import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';

function BlogPostPage() {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Find post metadata
  const postMetadata = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    if (!postMetadata) {
      setError('Post metadata not found. Cannot load content.');
      setLoading(false);
      return;
    }

    // Dynamically import the markdown file content as raw text
    import(/* @vite-ignore */ `../content/blog/${slug}.md?raw`)
      .then(module => {
        setPostContent(module.default);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error importing raw markdown content:", err);
        setError('Could not load post content file. Make sure the .md file exists in src/content/blog/ and matches the slug.');
        setLoading(false);
      });
  }, [slug, postMetadata]);

  if (loading) {
    return <div className="text-center py-20 text-primary">Loading post...</div>;
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-400">
        <p className="text-lg font-semibold mb-2">Error Loading Post</p>
        <p className="mb-4">{error}</p>
        <Link to="/blog" className="text-blue-400 hover:underline mt-4 inline-block">&larr; Back to Blog</Link>
      </div>
    );
  }

  // This check is likely redundant now because of the useEffect check, but good for safety
  if (!postMetadata) {
     return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-400">
        <p className="text-lg font-semibold mb-2">Error</p>
        <p>Post not found.</p>
        <Link to="/blog" className="text-blue-400 hover:underline mt-4 inline-block">&larr; Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Render post metadata */}
      <div className="mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold text-primary mb-2">{postMetadata.title}</h1>
        <p className="text-gray-400 text-sm">
          By {postMetadata.author} on {new Date(postMetadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      
      {/* Render Markdown content */}
      <article className="prose prose-invert prose-lg lg:prose-xl max-w-none">
        <ReactMarkdown>
          {postContent}
        </ReactMarkdown>
      </article>
      
      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <Link to="/blog" className="text-blue-400 hover:underline">&larr; Back to Blog List</Link>
      </div>
    </div>
  );
}

export default BlogPostPage; 