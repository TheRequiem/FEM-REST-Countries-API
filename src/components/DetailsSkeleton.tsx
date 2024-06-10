import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const DetailsSkeleton = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="flex flex-col md:flex-row md:gap-24 py-10 px-6 md:py-16 md:px-24 bg-light-bg dark:bg-dark-bg min-h-[calc(100vh-64px)] dark:text-dark-text">
      <button
        className="fixed flex items-center font-light text-lg gap-2 rounded-md py-2 px-8 drop-shadow-md bg-light-element dark:bg-dark-element dark:text-dark-text w-32"
        onClick={handleBack}
      >
        <ArrowLeftIcon className="h-6 w-6" />
        Back
      </button>
      <div className="sm:min-w-96 max-w-128 sm:h-64 mt-24 bg-gray-300 dark:bg-gray-700 animate-pulse" />
      <div className="flex flex-col mt-12 sm:mt-28">
        <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse mb-6" />
        <div className="flex flex-col lg:flex-row mt-6 md:mt-8 md:gap-16">
          <div>
            <p className="font-semibold text-lg">
              {`Native Name: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Population: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Region: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Sub Region: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Capital: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              {`Top Level Domain: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Currencies: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Languages: `}
              <span className="font-light">
                <span className="h-6 w-48 bg-gray-300 dark:bg-gray-700 animate-pulse inline-block"></span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start mt-16 gap-2 lg:items-center">
          <p className="font-semibold text-lg">Border Countries: </p>
          <div className="flex gap-2">
            <span className="h-10 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></span>
            <span className="h-10 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></span>
            <span className="h-10 w-24 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BordersSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start mt-16 gap-2 lg:items-center">
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
      <div className="flex gap-2">
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
