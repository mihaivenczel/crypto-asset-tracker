import { useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  useEffect(() => {
    // make it dark becuse eyes hurt
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="min-h-screen w-full dark text-white flex flex-col items-center">
          <HomeRoute />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
