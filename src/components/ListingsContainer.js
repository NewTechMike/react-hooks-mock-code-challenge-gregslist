import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

//1. When app loads, all the listings show

//2. Clicking the star will "unfavorite/favorite" the clicked item
// This will select and deselect the star

//3. Clicking the trash will delete the item

//4. Able to search for items by their name

function ListingsContainer({search}) {
  const [items, setItems] = useState([])

  useEffect(() => { 
    fetch("http://localhost:6001/listings")
    .then((resp)=>resp.json())
    .then((item)=>setItems(item))
  },[]);

  function handleItemDelete(deletedItem){
    console.log("DI: ", deletedItem)
      const updatedItems = items.filter((item)=>
        item.id !== deletedItem.id);
        setItems(updatedItems)
      }
      
      console.log("items: ", items)

  const filterListings = items.filter((item)=>{
    return item.description.toLowerCase().includes(search.toLowerCase())
  })
  const things = filterListings.map((data) => {
    return <ListingCard 
      key={data.id} 
      listings={data}
      onItemDelete={handleItemDelete} />
  }); 

  console.log("things: ", things)

  

  console.log("FL: ", filterListings)

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
