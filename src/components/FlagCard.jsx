import { Link } from "react-router-dom";

function FlagCard({ details }) {
  return (
    <Link to={`/${details.name.common}`}>
      <div className="card text-left dark:bg-dark-blue bg-very-light-gray shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 md:max-w-[200px]">
        <img
          src={details.flags.png}
          alt={details.flag.alt}
          className="md:h-36 h-44 shadow-md aspect-square w-full sm:max-w-sm"
        />
        <div className="details p-4">
          <h1>{details.name.common}</h1>
          <p>Population: {details.population}</p>
          <p>Region: {details.continents[0]}</p>
          <p>
            Capital:{" "}
            {typeof details.capital == "undefined"
              ? ""
              : details.capital.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FlagCard;
