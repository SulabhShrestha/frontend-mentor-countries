import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../Context/CountryContext";
import { Link } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  const queryCountry = params.country;

  const { countries } = useContext(CountryContext);

  const queryCountryDetails = countries.filter(
    (country) => country.name.common === queryCountry
  )[0];

  // if not found
  if (!queryCountryDetails) {
    return <p>Not found</p>;
  }

  console.log(queryCountryDetails);
  return (
    <div className="h-[100vh] px-[4%]">
      <Link to={"/"}>
        <button className="dark:bg-very-dark-blue bg-very-light-gray px-3 py-2 rounded-lg shadow-md dark:shadow-dark-gray">
          Back
        </button>
      </Link>

      <div className="country-details flex flex-col sm:flex-row gap-12 items-center">
        <img
          src={queryCountryDetails.flags.png}
          alt={queryCountryDetails.flag.alt}
          className="shadow-md w-full h-[10%] sm:flex-1"
        />

        <div className="details p-4 flex-1 text-left">
          <h1 className="font-bold text-2xl py-4">
            {queryCountryDetails.name.common}
          </h1>
          <p>Population: {queryCountryDetails.population}</p>
          <p>Region: {queryCountryDetails.continents[0]}</p>
          <p>
            Capital:{" "}
            {typeof queryCountryDetails.capital == "undefined"
              ? ""
              : queryCountryDetails.capital.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
