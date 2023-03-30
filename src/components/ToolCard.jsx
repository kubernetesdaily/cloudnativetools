import React from "react";

function ToolCard({ entry }) {
  return <div
    className="w-full border min-w-[315px] border-pink-600 pt-10 px-4 pb-4 rounded-md"
  >
    <div>
      <h3 className="text-[28px] font-semibold">{entry.title}</h3>
      <p className="text-base text-grayFill">{entry.description}</p>
    </div>
    <div className="flex justify-between items-end mt-4">
      <span className="font-mono">{entry.tag}</span>
      <div className="flex gap-2 ">
        <div className=" py-2 px-4 rounded-3xl h-[36px] flex items-center bg-bgGray font-semibold cursor-pointer">
          <a
            target={"_blank"}
            href={entry.link !== "" ? entry.link : "/"}
          >
            Source
          </a>
        </div>
        <div className=" py-2 px-4 rounded-3xl h-[36px] flex items-center bg-bgGray font-semibold cursor-pointer">
          <a
            target={"_blank"}
            href={
              entry.github !== ""
                ? "https://www.github.com/" + entry.github
                : "/"
            }
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </div>;
}

export default ToolCard;
