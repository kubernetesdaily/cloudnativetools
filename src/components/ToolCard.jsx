import React from "react";

function ToolCard({ entry }) {
  return (
    <div className="w-full border border-gray-700 bg-bgGray rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {entry.title}
        </h3>
        <p className="text-sm text-grayFill flex-grow">{entry.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">{entry.tag}</span>
          <div className="flex gap-2">
            <a
              href={entry.link !== "" ? entry.link : "/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-full transition-colors duration-200 flex items-center justify-center h-[36px] "
            >
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
              className="text-sm bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-3 rounded-full transition-colors duration-200 flex items-center justify-center h-[36px]"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
