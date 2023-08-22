import { useContext } from "react";
import { CountryContext } from "../Context/FlagContext";
import { PaginateContext } from "../Context/PaginateContext";
import { HashLink } from "react-router-hash-link";

function Paginate() {
  const { allCountries } = useContext(CountryContext);
  const { currentPage, setCurrentPage, itemsToDisplayPerPage } =
    useContext(PaginateContext);

  // how many items to be displayed on the page

  const noOfPages = Math.ceil(allCountries.data.length / itemsToDisplayPerPage);

  return (
    <div className="w-full">
      <HashLink smooth to={"#search"}>
        <button className="join-item btn btn-outline z-10">Previous</button>
        {Array.from({ length: noOfPages }, (_, index) => {
          return (
            <button
              key={index}
              className={`join-item btn w-12  ${
                currentPage === index + 1
                  ? "bg-blue-400 text-black"
                  : "btn-outline"
              }`}
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="join-item btn btn-outline">Next</button>
      </HashLink>
    </div>
  );
}

export default Paginate;
