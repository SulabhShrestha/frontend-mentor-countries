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
    <>
      <Link to={"/"}>
        <button className="bg-green-400 px-3 py-2 rounded-lg">Back</button>
      </Link>
    </>
  );
}

export default CountryDetails;
