import React from "react";

function ListingCard({listings}) {
  const {id, description, image, location} = listings;
  const star = "true"
  function starClick(){
    return !star
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} /> {/*"https://via.placeholder.com/300x300"*/}
      </div>
      <div className="details">
        {{star} ? (
          <button className="emoji-button favorite active"
          onClick={starClick}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={starClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
