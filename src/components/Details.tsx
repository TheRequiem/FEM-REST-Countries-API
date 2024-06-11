import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import useCountryDetails from "../hooks/useCountryDetails";
import { useEffect } from "react";
import DetailsSkeleton, { BordersSkeleton } from "./DetailsSkeleton";

export const Details = () => {
  const navigate = useNavigate();

  type CountryParam = {
    country: string;
  };
  const { country } = useParams<CountryParam>();

  const handleBack = () => navigate(-1);

  const {
    fetchData,
    isLoading,
    isFetching,
    isBorderLoading,
    borderNames,
    refetch,
  } = useCountryDetails(country || "");

  const handleBorderClick = (country: string) => {
    navigate(`/details/${country}`);
  };

  useEffect(() => {
    refetch();
  }, [country, refetch]);

  if (isLoading || isFetching) {
    return <DetailsSkeleton />;
  }
  if (!country) {
    return <h2>Please enter a valid country or try again later.</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row md:gap-24 py-10 px-6 md:py-16 md:px-24 bg-light-bg dark:bg-dark-bg min-h-[calc(100vh-64px)] dark:text-dark-text">
      <button
        onClick={handleBack}
        className="fixed flex items-center font-light text-lg gap-2 rounded-md py-2 px-8 drop-shadow-md bg-light-element dark:bg-dark-element dark:text-dark-text w-32"
      >
        <ArrowLeftIcon className="h-6 w-6" />
        Back
      </button>
      <img
        src={fetchData?.flags.svg}
        alt={fetchData?.flags.alt}
        className="sm:min-w-96 max-w-128 sm:h-64 mt-24"
      />
      <div className="flex flex-col mt-12 sm:mt-28">
        <h1 className="text-4xl font-extrabold">{fetchData?.name.common}</h1>
        <div className="flex flex-col lg:flex-row mt-6 md:mt-8 md:gap-16">
          <div>
            <p className="font-semibold text-lg">
              {`Native Name: `}
              <span className="font-light">
                {Object.values(fetchData?.name.nativeName || {})
                  .map((name) => name.common)
                  .join(", ")}
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Population: `}
              <span className="font-light">
                {fetchData?.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Region: `}
              <span className="font-light">{fetchData?.region}</span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Sub Region: `}
              <span className="font-light">{fetchData?.subregion}</span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Capital: `}
              <span className="font-light">
                {fetchData?.capital.join(", ")}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">
              {`Top Level Domain: `}
              <span className="font-light">{fetchData?.tld.join(", ")}</span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Currencies: `}
              <span className="font-light">
                {Object.values(fetchData?.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </span>
            </p>
            <p className="font-semibold mt-2 text-lg">
              {`Languages: `}
              <span className="font-light">
                {Object.values(fetchData?.languages || {}).join(", ")}
              </span>
            </p>
          </div>
        </div>
        {isBorderLoading ? (
          <BordersSkeleton />
        ) : (
          <div className="flex flex-col lg:flex-row items-start mt-16 gap-2 lg:items-center">
            <p className="font-semibold text-lg">Border Countries: </p>
            <div className="flex gap-2">
              {borderNames.map((name) => (
                <button
                  key={name}
                  className="bg-light-element dark:bg-dark-element rounded-md shadow-md py-1 px-4"
                  onClick={() => handleBorderClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
