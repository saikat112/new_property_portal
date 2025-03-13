"use client";
import Image from "next/image";
import "./PropertyCard.css";

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      {/* Property Image */}
      <div className="image-container">
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={150}
          height={100}
          className="property-image"
        />
      </div>

      {/* Property Info */}
      <div className="info-container">
        <h3 className="property-title">{property.title}</h3>
        <p className="developer-name">by {property.developer}</p>
        <p className="property-type">{property.type}</p>
        <p className="location">{property.location}</p>
        <p className="price-range">{property.minPrice} - {property.maxPrice}</p>
      </div>
    </div>
  );
}
