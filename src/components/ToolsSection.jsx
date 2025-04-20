import React, { useState, useEffect } from "react";
import { entries } from "../data/entries";
import ToolCard from "./ToolCard";

function ToolsSection() {
  const [search, setSearch] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [githubStars, setGithubStars] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract unique tags from entries
  let dropdownTags = Array.from(new Set(entries.map((entry) => entry.tag))).sort();

  // Function to format star count
  const formatStarCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };

  // Function to fetch GitHub stars for a repository
  const fetchGithubStars = async (repo) => {
    const cacheKey = `github-stars-${repo}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    // Check if we have cached data less than 6 hours old
    if (cachedData) {
      const { stars, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < 21600000) { // 6 hours
        return stars;
      }
    }

    try {
      // Get GitHub token from environment variable
      const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
      
      const headers = {
        'Accept': 'application/vnd.github.v3+json',
        ...(githubToken && { 'Authorization': `token ${githubToken}` })
      };

      const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });
      
      // Handle rate limiting
      const rateLimit = {
        limit: response.headers.get('X-RateLimit-Limit'),
        remaining: response.headers.get('X-RateLimit-Remaining'),
        reset: response.headers.get('X-RateLimit-Reset')
      };

      if (response.status === 429) {
        const resetDate = new Date(rateLimit.reset * 1000);
        const minutes = Math.ceil((resetDate - new Date()) / 60000);
        throw new Error(`GitHub API rate limit exceeded. Resets in ${minutes} minutes. Using cached data where available.`);
      }

      if (response.status === 403 && rateLimit.remaining === '0') {
        const resetDate = new Date(rateLimit.reset * 1000);
        const minutes = Math.ceil((resetDate - new Date()) / 60000);
        throw new Error(`GitHub API rate limit reached. Resets in ${minutes} minutes. Using cached data where available.`);
      }

      if (!response.ok) {
        throw new Error(`GitHub API error for ${repo}: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache the result
      localStorage.setItem(cacheKey, JSON.stringify({
        stars: data.stargazers_count,
        timestamp: Date.now()
      }));
      
      return data.stargazers_count;
    } catch (error) {
      console.error("Error fetching GitHub stars:", error);
      // Return cached data if available when hitting rate limits
      if (error.message.includes('rate limit') && cachedData) {
        const { stars } = JSON.parse(cachedData);
        return stars;
      }
      setError(error.message);
      return null;
    }
  };

  // Fetch GitHub stars for all repositories on component mount
  useEffect(() => {
    const fetchAllStars = async () => {
      setIsLoading(true);
      setError(null);
      const stars = {};
      
      // Process repositories in batches to avoid overwhelming the API
      const batchSize = 10;
      const repos = entries.filter(entry => entry.github);
      
      for (let i = 0; i < repos.length; i += batchSize) {
        const batch = repos.slice(i, i + batchSize);
        const promises = batch.map(async (entry) => {
          const starCount = await fetchGithubStars(entry.github);
          stars[entry.github] = starCount;
        });
        
        try {
          await Promise.all(promises);
          setGithubStars(prevStars => ({ ...prevStars, ...stars }));
        } catch (error) {
          setError(error.message);
          // Don't break the loop on error, continue with next batch
        }
        
        // Add a small delay between batches to be nice to the API
        if (i + batchSize < repos.length) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      setIsLoading(false);
    };

    fetchAllStars();
  }, []);

  // Function to sort tools based on selected criteria
  const sortTools = (filteredEntries) => {
    switch (sortBy) {
      case 'stars':
        return [...filteredEntries].sort((a, b) => {
          const starsA = githubStars[a.github] || 0;
          const starsB = githubStars[b.github] || 0;
          return starsB - starsA;
        });
      case 'az':
        return [...filteredEntries].sort((a, b) => 
          a.title.localeCompare(b.title)
        );
      case 'za':
        return [...filteredEntries].sort((a, b) => 
          b.title.localeCompare(a.title)
        );
      default:
        return filteredEntries;
    }
  };

  // Filter entries based on search and tag selection
  const filteredEntries = entries.filter((entry) => {
    const searchTerm = search.toLowerCase();
    const selectedTag = selectVal.toLowerCase();
    const titleMatches = entry.title.toLowerCase().includes(searchTerm);
    const descriptionMatches = entry.description && entry.description.toLowerCase().includes(searchTerm);
    const tagMatches = selectedTag === "" || entry.tag.toLowerCase().includes(selectedTag);
    return (titleMatches || descriptionMatches) && tagMatches;
  });

  // Sort the filtered entries
  const sortedEntries = sortTools(filteredEntries);

  return (
    <div id="tools-section" className="bg-bgPrimary w-full px-6 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col w-full justify-center items-center gap-6 mx-auto rounded-xl">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Cloud Native Tools Collection
          </h2>
          <p className="text-grayFill max-w-2xl text-center mb-6">
            Discover and explore the best tools for Kubernetes and cloud native development
          </p>
        </div>
        
        {error && (
          <div className="w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md relative" role="alert">
            <div className="flex">
              <div className="py-1">
                <svg className="w-6 h-6 mr-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="font-bold">API Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-bgGray rounded-lg h-12 pl-10 pr-4 text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              placeholder="Search by tool name or description"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-3">
            {/* Tag Select */}
            <div className="w-full">
              <select
                value={selectVal}
                onChange={(ev) => setSelectVal(ev.target.value)}
                className="w-full bg-bgGray rounded-lg text-primary p-3 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              >
                <option value="" className="text-sm">
                  All Categories
                </option>
                {dropdownTags.map((tag) => (
                  <option key={tag} value={tag} className="text-sm">
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort Select */}
            <div className="w-full sm:w-1/3">
              <select
                value={sortBy}
                onChange={(ev) => setSortBy(ev.target.value)}
                className="w-full bg-bgGray rounded-lg text-primary p-3 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
              >
                <option value="default">Sort By</option>
                <option value="stars">Most Stars</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Count */}
      <div className="mt-6 mb-2 text-grayFill">
        <span className="px-3 py-1 bg-gray-700/30 rounded-full text-xs">
          {sortedEntries.length} tools found
        </span>
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {sortedEntries.length > 0 ? (
          sortedEntries.map((entry, index) => (
            <ToolCard
              entry={entry}
              key={index}
              githubStars={githubStars[entry.github]}
              isLoading={isLoading}
              formatStarCount={formatStarCount}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-grayFill">
            <svg className="w-16 h-16 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-xl font-medium">No tools found</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolsSection;
