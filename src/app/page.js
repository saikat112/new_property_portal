"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../store/propertySlice";
import "./page.css";


export default function Home() {
  const dispatch = useDispatch();
  const { properties, status } = useSelector((state) => state.property);

  useEffect(() => {
    console.log("Fetching properties...");
    dispatch(fetchProperties());
  }, [dispatch]);

  return (

    <div>
      <div className="banner">
        <h1>Find Your Dream Home</h1>
      </div>
      <div>
      <h1>Hot property</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{color: "red"}}>⚠️ Failed to fetch properties.</p>}
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <img src={property.imageUrl} alt={property.title} width="100" />
            <h3>{property.title}</h3>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
