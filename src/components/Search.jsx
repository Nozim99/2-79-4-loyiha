import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter") {
    }
  };

  const handleSubmit = () => {
    cb(value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 Search mt-3 position-relative">
          <input
            className="Search-input w-100 bg-transparent py-2"
            type="search"
            id="search-field"
            placeholder="Search..."
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            onClick={handleSubmit}
            value={value}
          />
          <button className="btn btn-primary position-absolute Search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
