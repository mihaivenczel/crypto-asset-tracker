import CoinSelectorModule from "../modules/dashboard/CoinSelectorModule";

const HomeRoute = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-white">
        Crypto Asset Tracker
      </h1>
      <CoinSelectorModule />
    </div>
  );
};

export default HomeRoute;
