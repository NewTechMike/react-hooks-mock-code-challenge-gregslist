import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

//1. When app loads, all the listings show

//2. Clicking the star will "unfavorite/favorite" the clicked item
// This will select and deselect the star

//3. Clicking the trash will delete the item

function ListingsContainer() {
  const [items, setItems] = useState([])

  useEffect(() => { 
    fetch("http://localhost:6001/listings")
    .then((resp)=>resp.json())
    .then((item)=>setItems(item))
  },[]);

  function handleItemDelete(deletedItem){
      const updatedItems = items.filter((item)=>
        item.id !== deletedItem.id);
        setItems(updatedItems)
        console.log("items: ", items)
  }

  const things = items.map((data) => {
    return <ListingCard 
      key={data.id} 
      listings={data}
      onItemDelete={handleItemDelete} />
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
