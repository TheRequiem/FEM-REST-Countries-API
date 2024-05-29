const Skeletons = () => {
  return (
    <div className="flex flex-col drop-shadow-md bg-light-element dark:bg-dark-element w-48 sm:w-64 rounded-md m-10 h-80 animate-pulse">
      <div className="rounded-t-md bg-gray-300 dark:bg-gray-700 h-32 w-full"></div>
      <div className="px-4 pb-2 pt-5 sm:pt-7">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4 rounded-md mb-2"></div>
      </div>
      <div className="pl-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-5/6 rounded-md mb-2"></div>
      </div>
      <div className="pl-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-4/5 rounded-md mb-2"></div>
      </div>
      <div className="pl-4 pb-6 sm:pb-11">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 w-3/5 rounded-md"></div>
      </div>
    </div>
  );
};

export default Skeletons;
