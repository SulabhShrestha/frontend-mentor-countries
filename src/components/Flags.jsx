import { useEffect, useContext } from "react";
import FlagCard from "./FlagCard";
import { CountryContext } from "../Context/CountryContext";
import Paginate from "./Paginate";

function Flags() {
  const { allCountries, fetchAllCountries, countries } =
    useContext(CountryContext);

  useEffect(() => {
    fetchAllCountries();
  }, [fetchAllCountries]);

  if (allCountries.isLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  return (
    <>
      <div className="Flags grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12">
        {countries.map((country, index) => {
          return <FlagCard key={index} details={country} />;
        })}
      </div>

      <Paginate />
    </>
  );
}

export default Flags;
