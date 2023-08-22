import axios from "axios";
import React, { useEffect } from "react";

const CountryContext = React.createContext();

function CountryProvider({ children }) {
  const [countries, setCountries] = React.useState({
    isLoading: true,
    data: [],
  });

  // returns all countries
  async function fetchAllCountries() {
    const response = await axios({
      method: "GET",
      url: "https://restcountries.com/v3.1/all",
    });
    setCountries({ isLoading: false, data: [].concat(...response.data) });

    console.log(typeof countries.data);
  }

  return (
    <CountryContext.Provider value={{ countries, fetchAllCountries }}>
      {children}
    </CountryContext.Provider>
  );
}

export default CountryProvider;
export { CountryContext };
