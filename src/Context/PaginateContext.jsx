import { createContext, useState } from "react";

const PaginateContext = createContext();

function PaginateProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsToDisplayPerPage = window.innerWidth < 600 ? 20 : 30;
  return (
    <PaginateContext.Provider
      value={{ currentPage, setCurrentPage, itemsToDisplayPerPage }}
    >
      {children}
    </PaginateContext.Provider>
  );
}

export default PaginateProvider;

export { PaginateContext };
