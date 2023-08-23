import PaginateProvider from "../Context/PaginateContext";
import Flags from "../components/Flags";
import SearchAndFilter from "../components/SearchAndFilter";

function Homepage() {
  return (
    <PaginateProvider>
      <main>
        <SearchAndFilter />
        <Flags />
      </main>
    </PaginateProvider>
  );
}

export default Homepage;
