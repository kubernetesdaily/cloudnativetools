import React from "react";

function ToolCard({ entry, githubStars, isLoading, formatStarCount }) {
  const renderStarCount = () => {
    if (!entry.github) return null;
    
    if (isLoading) {
      return (
        <span className="text-sm bg-gray-600 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center h-[36px] animate-pulse">
          <svg className="w-4 h-4 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span className="text-white/70">Loading</span>
        </span>
      );
    }

    if (githubStars === null) {
      return (
        <span className="text-sm bg-gray-600 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center h-[36px] opacity-75">
          <svg className="w-4 h-4 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span>N/A</span>
        </span>
      );
    }

    return (
      <span className="text-sm bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center h-[36px] cursor-default group">
        <svg className="w-4 h-4 mr-1 text-yellow-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        {formatStarCount(githubStars)}
      </span>
    );
  };

  return (
    <div className="w-full border border-gray-700 bg-bgGray rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500/30 hover:translate-y-[-2px]">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-primary">
            {entry.title}
          </h3>
          <div className="bg-gray-700/50 text-xs font-medium text-gray-300 px-2.5 py-0.5 rounded-md">
            {entry.tag}
          </div>
        </div>
        <p className="text-sm text-grayFill/90 flex-grow mb-4">{entry.description}</p>
        <div className="flex items-center justify-end gap-2 mt-auto">
          <a
            href={entry.link !== "" ? entry.link : "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center h-[36px] hover:shadow-md"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Learn
          </a>
          <a
            href={
              entry.github !== ""
                ? "https://www.github.com/" + entry.github
                : "/"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-center h-[36px] hover:shadow-md"
          >
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
            GitHub
          </a>
          {renderStarCount()}
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
