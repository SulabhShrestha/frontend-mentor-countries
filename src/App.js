import { useContext } from "react";
import "./App.css";
import CountryProvider from "./Context/CountryContext";
import PaginateProvider, { PaginateContext } from "./Context/PaginateContext";
import Flags from "./components/Flags";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App h-[100vh] ${theme}`}>
      <div className="dark:text-white text-very-dark-blue dark:bg-very-dark-blue bg-very-light-gray transition-all duration-300">
        <Header />
        <Router>
          <PaginateProvider>
            <CountryProvider>
              <main>
                <SearchAndFilter />
                <Flags />
              </main>
            </CountryProvider>
          </PaginateProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
