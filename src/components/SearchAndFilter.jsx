import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";

function SearchAndFilter() {
  const { searchSpecificCountry, filterByRegion } = useContext(CountryContext);

  function searchCountry(e) {
    e.preventDefault();
    searchSpecificCountry(e.target.value);
  }

  return (
    <div
      className="search-and-filter flex justify-between my-4 px-[4%]"
      id="search"
    >
      {/* search */}
      <div className="form-control">
        <div className="input-group shadow-md">
          <button className="btn btn-square dark:bg-dark-blue bg-very-light-gray border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search for a country"
            className="input dark:bg-dark-blue bg-very-light-gray"
            onChange={searchCountry}
          />
        </div>
      </div>

      {/* filter by region */}
      <select
        className="select max-w-xs dark:bg-dark-blue bg-very-light-gray shadow-md dark:text-white text-black"
        onChange={(e) => filterByRegion(e.target.value)}
      >
        <option disabled selected>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
