import "./App.css";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  return (
    <div className="App dark:text-white text-very-dark-blue dark:bg-very-dark-blue bg-very-light-gray h-[100vh]">
      <Header />
      <main>
        <SearchAndFilter />
      </main>
    </div>
  );
}

export default App;
