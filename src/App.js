import "./App.css";
import CountryProvider from "./Context/FlagContext";
import Flags from "./components/Flags";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  return (
    <div className="App dark:text-white text-very-dark-blue dark:bg-very-dark-blue bg-very-light-gray h-[100vh]">
      <Header />
      <CountryProvider>
        <main>
          <SearchAndFilter />
          <Flags />
        </main>
      </CountryProvider>
    </div>
  );
}

export default App;
