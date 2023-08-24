import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { PaginateContext } from "./PaginateContext";

const CountryContext = createContext();

function CountryProvider({ children }) {
  // all countries list is stored here
  const [allCountries, setAllCountries] = useState({
    isLoading: true,
    data: [],
  });

  // that will be displayed to the user,
  // depending upon the current page
  const [countries, setCountries] = useState([]);

  const { itemsToDisplayPerPage, currentPage } = useContext(PaginateContext);

  // updating displaying countries list
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsToDisplayPerPage;
    const endIndex = startIndex + itemsToDisplayPerPage;
    setCountries(allCountries.data.slice(startIndex, endIndex));
  }, [currentPage, itemsToDisplayPerPage, allCountries]);

  // returns all countries
  async function fetchAllCountries() {
    const response = await axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    });
    setAllCountries({ isLoading: false, data: [].concat(...response.data) });
  }

  // searches specific country
  function searchSpecificCountry(countryName) {
    console.log(countryName);
    const queryCountryDetails = allCountries.data.filter((country) =>
      country.name.common.toLowerCase().includes(countryName)
    );

    console.log(queryCountryDetails);

    setCountries(queryCountryDetails);
  }

  return (
    <CountryContext.Provider
      value={{
        allCountries,
        countries,
        fetchAllCountries,
        searchSpecificCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export default CountryProvider;
export { CountryContext };
