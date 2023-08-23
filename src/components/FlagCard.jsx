function FlagCard({ details }) {
  return (
    <div className="card text-left dark:bg-dark-blue bg-very-light-gray shadow-md">
      <img
        src={details.flags.png}
        alt={details.flag.alt}
        className="h-36 w-full shadow-md"
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
  );
}

export default FlagCard;
