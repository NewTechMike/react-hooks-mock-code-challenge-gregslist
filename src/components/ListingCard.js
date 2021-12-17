import React, {useState} from "react";

function ListingCard({listings, onItemDelete}) {
  const {id, description, image, location} = listings;
  const [star, setStar] = useState(true)
  
  function starClick(){
    setStar(!star)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listings.id}`,{
      method: "DELETE",
    })
    .then((resp)=>resp.json())
    .then((item)=>onItemDelete(item));
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} /> {/*"https://via.placeholder.com/300x300"*/}
      </div>
      <div className="details">
        {star===true ? (
          <button className="emoji-button favorite active"
          onClick={starClick}>★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={starClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"
        onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
