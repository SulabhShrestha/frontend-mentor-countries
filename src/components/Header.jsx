import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  // class
  const themeClass =
    "flex items-center gap-2 text-lg font-semibold cursor-pointer select-none";

  const { setTheme } = useContext(ThemeContext);
  return (
    <header className="flex items-center justify-between dark:bg-dark-blue shadow-md bg-very-light-gray py-6 ">
      <h1 className="text-2xl font-semibold ">Where in the world?</h1>

      <div
        className={`light  ${themeClass} hidden dark:flex`}
        onClick={() => setTheme("light")}
      >
        <FaSun />
        <p>Light Mode</p>
      </div>

      <div
        className={`dark ${themeClass} dark:hidden`}
        onClick={() => setTheme("dark")}
      >
        <FaMoon />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
