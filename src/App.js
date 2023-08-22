import "./App.css";
import CountryProvider from "./Context/FlagContext";
import PaginateProvider, { PaginateContext } from "./Context/PaginateContext";
import Flags from "./components/Flags";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  return (
    <div className="App dark:text-white text-very-dark-blue dark:bg-very-dark-blue bg-very-light-gray h-[100vh]">
      <Header />
      <PaginateProvider>
        <CountryProvider>
          <main>
            <SearchAndFilter />
            <Flags />
          </main>
        </CountryProvider>
      </PaginateProvider>
    </div>
  );
}

export default App;
