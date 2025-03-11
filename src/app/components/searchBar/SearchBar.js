"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query); // Pass search query to parent component
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search properties by location, type..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        🔍 Search
      </button>
    </div>
  );
}
