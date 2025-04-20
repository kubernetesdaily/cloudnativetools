import React, { useState, useEffect } from "react";
import { entries } from "../data/entries";
import ToolCard from "./ToolCard";

function ToolsSection() {
  const [search, setSearch] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [githubStars, setGithubStars] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract unique tags from entries
  let dropdownTags = Array.from(new Set(entries.map((entry) => entry.tag)));

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

  return (
    <div className="bg-bgPrimary w-full px-6 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col w-full justify-center items-center gap-6 mx-auto rounded-xl">
        <h2 className="text-2xl font-semibold text-primary">
          Explore Kubernetes & Cloud Native Tools
        </h2>
        {error && (
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
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
            const tagMatches =
              selectedTag === "" ||
              entry.tag.toLowerCase().includes(selectedTag);
            return titleMatches && tagMatches;
          })
          .map((entry, index) => (
            <ToolCard
              entry={entry}
              key={index}
              githubStars={githubStars[entry.github]}
              isLoading={isLoading}
              formatStarCount={formatStarCount}
            />
          ))}
      </div>
    </div>
  );
}

export default ToolsSection;
