import React, { useState } from "react";
import entries from "../data/entries";
import ToolCard from "./ToolCard";
function ToolsSection() {
    const [search, setSearch] = useState("");
    console.log(entries);
    return (
        <div className="bg-bgPrimary w-full px-6 py-6  max-w-4xl mx-auto">
            <div className="flex w-fit justify-center items-center gap-4 mx-auto bg-bgGray rounded-xl">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={
                        "w-full md:w-[515px] lg:w-[768px] rounded-sm rounded-l-xl h-[48px] p-4 text-black"
                    }
                    placeholder="search"
                />
                <label className=" text-xl pr-4">🔍</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-[40px]">
                {entries
                    .filter((entry) => {
                        return search.toLocaleLowerCase() === ""
                            ? entry
                            : entry.title.toLocaleLowerCase().includes(search);
                    })
                    .map((entry, index) => (
                        <ToolCard entry={entry} key={index} />
                    ))}
            </div>
        </div>
    );
}

export default ToolsSection;
