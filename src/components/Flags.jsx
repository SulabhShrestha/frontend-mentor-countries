import { useEffect, useContext } from "react";
import FlagCard from "./FlagCard";
import { CountryContext } from "../Context/FlagContext";
import Paginate from "./Paginate";

function Flags() {
  const { fetchAllCountries, countries } = useContext(CountryContext);
  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (countries.isLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  return (
    <>
      <div className="Flags grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12">
        {Object.keys(countries.data).map((country, index) => {
          console.log(countries.data[country]);
          console.log("I went for " + (index + 1));
          return <FlagCard key={index} details={countries.data[country]} />;
        })}
      </div>

      <Paginate />
    </>
  );
}

export default Flags;
