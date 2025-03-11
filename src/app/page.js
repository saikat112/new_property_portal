"use client"; // Ensure it's a client component
import { useEffect, useState } from "react";
import PropertyCard from "../app/components/cards/PropertyCard/PropertyCard";
import "./page.css";

export default function Home() {
  const [hotProperties, setHotProperties] = useState([]);
  const [newlyLaunchedProperties, setNewlyLaunchedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const hotRes = await fetch("/api/properties?category=hot_property");
        const hotData = await hotRes.json();
        setHotProperties(hotData);

        const newRes = await fetch("/api/properties?category=newly_launched_property");
        const newData = await newRes.json();
        setNewlyLaunchedProperties(newData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <h1>Find Your Dream Home</h1>
      </div>

      {/* Hot Properties Section */}
      <div className="property-section">
        <h2>🔥 Hot Properties</h2>
        {loading ? <p>Loading...</p> : (
          <div className="property-list">
            {hotProperties.map((property) => (
              <PropertyCard key={property.id} property={property} category="hot_property" />
            ))}
          </div>
        )}
      </div>

      {/* Newly Launched Properties Section */}
      <div className="property-section">
        <h2>🌟 Newly Launched Properties</h2>
        {loading ? <p>Loading...</p> : (
          <div className="property-list">
            {newlyLaunchedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} category="newly_launched_property" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
