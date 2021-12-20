import React, { useState} from "react";

function Search({onSearch}) {
  const [searchItem, setSearchItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log("Event: ", e);
    setSearchItem(onSearch)
    
   /*  fetch("http://localhost:6001/listings",{
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      //the body goes right here
    })
    .then((resp)=>resp.json())
    .then((data)=>console.log("data: ", data)) */
  }//When "submitted", do a thing

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
