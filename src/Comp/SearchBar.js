import React, { useState } from "react";
import { brands } from "./Brands";
import { tushar } from "./Mainitems";

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {brands
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const title = item.Title.toLowerCase();

              return (
                searchTerm &&
                title.startsWith(searchTerm) &&
                title !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div onClick={() => onSearch(item.Title)} className="dropdown-row" key={item.Title}>
                {item.Title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}