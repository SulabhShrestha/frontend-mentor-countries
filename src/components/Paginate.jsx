import { useContext } from "react";
import { CountryContext } from "../Context/CountryContext";
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
      <HashLink smooth to={currentPage === 1 ? "" : "#search"}>
        <button
          className="btn btn-primary z-10 mr-2"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          Previous
        </button>
      </HashLink>
      <HashLink smooth to={"#search"}>
        {Array.from({ length: noOfPages }, (_, index) => {
          return (
            <button
              key={index}
              className={`btn w-10 hover:bg-slate-400 ${
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
      </HashLink>

      <HashLink smooth to={currentPage === noOfPages ? "" : "#search"}>
        <button
          className="btn btn-primary ml-2"
          disabled={currentPage === noOfPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </button>
      </HashLink>
    </div>
  );
}

export default Paginate;
