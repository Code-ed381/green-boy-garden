"use client";

import { useState, useEffect } from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { artists, genres } from "@/lib/releases";

interface FilterState {
  search: string;
  artist: string;
  genre: string;
  type: string;
  year: string;
  explicit: boolean;
  sortBy: string;
}

interface DiscoveryControlsProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  resultCount: number;
}

export default function DiscoveryControls({ 
  filters, 
  onFiltersChange, 
  resultCount 
}: DiscoveryControlsProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Load filters from localStorage on mount
  useEffect(() => {
    const savedFilters = localStorage.getItem("musicFilters");
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        onFiltersChange({ ...filters, ...parsed });
      } catch (e) {
        console.error("Failed to load saved filters:", e);
      }
    }
  }, []);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("musicFilters", JSON.stringify(filters));
  }, [filters]);

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    const defaultFilters = {
      search: "",
      artist: "All",
      genre: "All",
      type: "All",
      year: "All",
      explicit: false,
      sortBy: "popular",
    };
    onFiltersChange(defaultFilters);
  };

  const hasActiveFilters = 
    filters.search || 
    filters.artist !== "All" || 
    filters.genre !== "All" || 
    filters.type !== "All" || 
    filters.year !== "All" || 
    filters.explicit;

  const FilterChip = ({ 
    label, 
    isActive, 
    onClick, 
    onClear 
  }: { 
    label: string; 
    isActive: boolean; 
    onClick: () => void; 
    onClear?: () => void; 
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
        isActive 
          ? "bg-[#7aad3a] text-[#0a0a0a]" 
          : "bg-white/5 border border-white/10 text-[#888] hover:bg-white/10 hover:border-[#7aad3a]/50 hover:text-[#7aad3a]"
      }`}
    >
      {label}
      {isActive && onClear && (
        <X size={14} className="hover:bg-black/20 rounded-full" onClick={onClear} />
      )}
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search 
          size={20} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888]" 
        />
        <input
          type="text"
          placeholder="Search releases, artists, or genres..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-[#f0f0ec] placeholder-[#666] focus:outline-none focus:border-[#7aad3a]/50 focus:bg-white/10 transition-all duration-200"
          aria-label="Search releases"
        />
      </div>

      {/* Filter Controls */}
      <div className="space-y-4">
        {/* Desktop Filters */}
        <div className="hidden lg:flex flex-wrap items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilter("sortBy", e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Sort by"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888] pointer-events-none" 
            />
          </div>

          {/* Artist Filter */}
          <div className="relative">
            <select
              value={filters.artist}
              onChange={(e) => updateFilter("artist", e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Filter by artist"
            >
              {artists.map((artist) => (
                <option key={artist} value={artist} className="bg-[#1a1a1a]">
                  {artist}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888] pointer-events-none" 
            />
          </div>

          {/* Genre Filter */}
          <div className="relative">
            <select
              value={filters.genre}
              onChange={(e) => updateFilter("genre", e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Filter by genre"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre} className="bg-[#1a1a1a]">
                  {genre}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888] pointer-events-none" 
            />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={filters.type}
              onChange={(e) => updateFilter("type", e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Filter by type"
            >
              <option value="All">All Types</option>
              <option value="SINGLE">Singles</option>
              <option value="EP">EPs</option>
              <option value="ALBUM">Albums</option>
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888] pointer-events-none" 
            />
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              value={filters.year}
              onChange={(e) => updateFilter("year", e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Filter by year"
            >
              <option value="All">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888] pointer-events-none" 
            />
          </div>

          {/* Explicit Filter */}
          <FilterChip
            label="Explicit Only"
            isActive={filters.explicit}
            onClick={() => updateFilter("explicit", !filters.explicit)}
          />

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full text-sm font-medium bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-200"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[#f0f0ec] hover:bg-white/10 transition-all"
          >
            <Filter size={16} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#7aad3a] rounded-full" />
            )}
          </button>
        </div>

        {/* Mobile Filters Panel */}
        {showMobileFilters && (
          <div className="lg:hidden space-y-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="space-y-3">
              {/* Sort */}
              <div>
                <label className="block text-xs font-medium text-[#666] mb-2">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter("sortBy", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </select>
              </div>

              {/* Artist */}
              <div>
                <label className="block text-xs font-medium text-[#666] mb-2">Artist</label>
                <select
                  value={filters.artist}
                  onChange={(e) => updateFilter("artist", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50"
                >
                  {artists.map((artist) => (
                    <option key={artist} value={artist} className="bg-[#1a1a1a]">
                      {artist}
                    </option>
                  ))}
                </select>
              </div>

              {/* Genre */}
              <div>
                <label className="block text-xs font-medium text-[#666] mb-2">Genre</label>
                <select
                  value={filters.genre}
                  onChange={(e) => updateFilter("genre", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre} className="bg-[#1a1a1a]">
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs font-medium text-[#666] mb-2">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => updateFilter("type", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50"
                >
                  <option value="All">All Types</option>
                  <option value="SINGLE">Singles</option>
                  <option value="EP">EPs</option>
                  <option value="ALBUM">Albums</option>
                </select>
              </div>

              {/* Year */}
              <div>
                <label className="block text-xs font-medium text-[#666] mb-2">Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => updateFilter("year", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#f0f0ec] text-sm focus:outline-none focus:border-[#7aad3a]/50"
                >
                  <option value="All">All Years</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#888]">
          {resultCount === 0 
            ? "No results found" 
            : `Showing ${resultCount} result${resultCount !== 1 ? 's' : ''}`
          }
        </p>
        
        {hasActiveFilters && (
          <div className="hidden md:flex flex-wrap gap-2">
            {filters.search && (
              <FilterChip
                label={`Search: "${filters.search}"`}
                isActive={true}
                onClick={() => {}}
                onClear={() => updateFilter("search", "")}
              />
            )}
            {filters.artist !== "All" && (
              <FilterChip
                label={`Artist: ${filters.artist}`}
                isActive={true}
                onClick={() => {}}
                onClear={() => updateFilter("artist", "All")}
              />
            )}
            {filters.genre !== "All" && (
              <FilterChip
                label={`Genre: ${filters.genre}`}
                isActive={true}
                onClick={() => {}}
                onClear={() => updateFilter("genre", "All")}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
