import React, { useState } from "react";
import entries from "../data/entries";
import ToolCard from "./ToolCard";
function ToolsSection() {
    const [search, setSearch] = useState("");
  const [selectVal,setSelectVal]=useState("");
    let dropdownTags = [];
    entries.forEach((entry) => { dropdownTags.push(entry.tag) })
    dropdownTags = Array.from(new Set(dropdownTags));
    return (
        <div className="bg-bgPrimary w-full px-6 py-6  max-w-4xl mx-auto">
            <div className="flex flex-col  w-fit justify-center items-center gap-4 mx-auto  rounded-xl">
                <h1 className="text-left">Search using search bar</h1>
                <div className="flex justify-center items-center gap-4 bg-bgGray rounded-xl">

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
                <h1>Or....Search using tags from below</h1>
                <div>
                    <select
                        value={selectVal}
                        onChange={(ev) => setSelectVal(ev.target.value)}
                        className="w-full md:w-[300px] rounded-xl bg-white text-black p-[15px] h-[48px]"
                    >
                        {dropdownTags.map((tag)=>(
                            <option value={tag} className="w-full md:w-[300px] text-[12px] ">{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-[40px]">
                {entries
                    .filter((entry) => { 
                        return search.toLocaleLowerCase() === "" ? selectVal.toLocaleLowerCase() === "" ? entry: entry.tag.toLocaleLowerCase().includes(selectVal.toLocaleLowerCase()) : entry.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    })
                    .map((entry, index) => (
                        <ToolCard entry={entry} key={index} />
                    ))}
            </div>
        </div>
    );
}

export default ToolsSection;
