import { useEffect, useState } from "react";
import HomeRoute from "./routes/HomeRoute";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <HomeRoute />
    </div>
  );
};

export default App;
