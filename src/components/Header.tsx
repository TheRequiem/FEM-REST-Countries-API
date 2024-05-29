import { MoonIcon } from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="shadow-md bg-light-element dark:bg-dark-element top w-full top-0 z-10 h-16 sticky">
      <div className="p-4 sm:py-4 sm:px-16 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-md sm:font-extrabold sm:text-3xl dark:text-dark-text">
            Where in the world?
          </h1>
        </Link>
        <button onClick={handleDarkMode} className="flex gap-2 items-center">
          {darkMode ? (
            <MoonIconSolid className="sm:size-6 dark:text-dark-text size-3" />
          ) : (
            <MoonIcon className="sm:size-6 dark:text-dark-text size-3" />
          )}
          <span className="text-sm sm:text-lg font-semibold dark:text-dark-text">
            Dark Mode
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
