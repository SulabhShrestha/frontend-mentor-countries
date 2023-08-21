import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Header() {
  // class
  const themeClass = "flex items-center gap-2 text-lg font-semibold";
  return (
    <header className="flex items-center justify-between bg-dark-blue py-6">
      <h1 className="text-2xl font-semibold ">Where in the world?</h1>

      <div className={`light ${themeClass} hidden dark:flex`}>
        <FaSun />
        <p>Light Mode</p>
      </div>

      <div className={`dark ${themeClass} dark:hidden`}>
        <FaMoon />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
