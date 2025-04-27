import { useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import { Provider } from "react-redux";
import { store } from "./state";

const App = () => {
  useEffect(() => {
    // make it dark becuse eyes hurt
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  return (
    <Provider store={store}>
      <div className="min-h-screen w-full dark text-white flex flex-col items-center">
        <HomeRoute />
      </div>
    </Provider>
  );
};

export default App;
