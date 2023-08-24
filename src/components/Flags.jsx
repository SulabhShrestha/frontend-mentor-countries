import { useEffect, useContext } from "react";
import FlagCard from "./FlagCard";
import { CountryContext } from "../Context/CountryContext";
import Paginate from "./Paginate";

function Flags() {
  const { allCountries, fetchAllCountries, countries } =
    useContext(CountryContext);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (allCountries.isLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (!countries) {
    return <p>Nothing found!</p>;
  }

  return (
    <>
      <div className="flags grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 px-[4%] content-center justify-center">
        {countries.map((country, index) => {
          return <FlagCard key={index} details={country} />;
        })}
      </div>

      <Paginate />
    </>
  );
}

export default Flags;
