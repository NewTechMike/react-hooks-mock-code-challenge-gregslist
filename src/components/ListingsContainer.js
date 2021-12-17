import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

//1. When app loads, all the listings show

//2. Clicking the star will "unfavorite/favorite" the clicked item
// This will select and deselect the star

function ListingsContainer() {
  const [items, setItems] = useState("")

  useEffect(() => { 
    fetch("http://localhost:6001/listings")
    .then((resp)=>resp.json())
    .then((item)=>setItems(item))
  },[]);

  const things = items.map((data) => {
    return <ListingCard key={data.id} listings={data}/>
  }); 
  
  console.log("things: ", things)
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {things}
      </ul>
    </main>
  );
}

export default ListingsContainer;
