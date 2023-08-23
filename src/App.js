import { useContext } from "react";
import "./App.css";
import CountryProvider from "./Context/CountryContext";
import PaginateProvider, { PaginateContext } from "./Context/PaginateContext";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App h-[100vh] ${theme}`}>
      <div className="dark:text-white text-very-dark-blue dark:bg-very-dark-blue bg-very-light-gray transition-all duration-300">
        <Header />
        <Router>
          <PaginateProvider>
            <CountryProvider>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/:country" element={<CountryDetails />} />
              </Routes>
            </CountryProvider>
          </PaginateProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
