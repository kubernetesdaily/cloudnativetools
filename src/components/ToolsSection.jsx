import React, { useState } from "react";
import entries from "../data/entries";
import ToolCard from "./ToolCard";

function ToolsSection() {
  const [search, setSearch] = useState("");
  const [selectVal, setSelectVal] = useState("");

  // Extract unique tags from entries
  let dropdownTags = Array.from(new Set(entries.map((entry) => entry.tag)));

  return (
    <div className="bg-bgPrimary w-full px-6 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col w-full justify-center items-center gap-6 mx-auto rounded-xl">
        <h2 className="text-2xl font-semibold text-primary">
          Explore Kubernetes & Cloud Native Tools
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-bgGray rounded-xl h-12 p-4 text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              placeholder="Search by tool name"
            />
            <label className="absolute right-4 top-3 text-xl text-gray-400 pointer-events-none">
              🔍
            </label>
          </div>
          {/* Tag Select */}
          <div className="w-full md:w-1/3">
            <select
              value={selectVal}
              onChange={(ev) => setSelectVal(ev.target.value)}
              className="w-full bg-bgGray rounded-xl text-primary p-3 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
            >
              <option value="" className="text-sm">
                Filter by Tag
              </option>
              {dropdownTags.map((tag) => (
                <option key={tag} value={tag} className="text-sm">
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {entries
          .filter((entry) => {
            const searchTerm = search.toLowerCase();
            const selectedTag = selectVal.toLowerCase();
            const titleMatches = entry.title.toLowerCase().includes(searchTerm);
            const tagMatches = selectedTag === "" || entry.tag.toLowerCase().includes(selectedTag);
            return titleMatches && tagMatches;
          })
          .map((entry, index) => (
            <ToolCard entry={entry} key={index} />
          ))}
      </div>
    </div>
  );
}

export default ToolsSection;
