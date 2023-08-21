function SearchAndFilter() {
  return (
    <div className="search-and-filter flex justify-between">
      {/* search */}
      <div className="form-control">
        <div className="input-group">
          <button className="btn btn-square">
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
            className="input "
          />
        </div>
      </div>

      {/* filter by region */}
      <select className="select max-w-xs">
        <option disabled selected>
          Filter by Region
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
