import { useEffect, useState } from "react";
import Card from "./Card";
import Skeletons from "./Skeletons";
import useCountries from "../hooks/useCountries";
import Filters from "./Filters";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { initialData, filteredData, setFilteredData, isLoading } =
    useCountries();

  useEffect(() => console.log("Initial Data", initialData), [initialData]);
  useEffect(() => console.log("Filtered Data", filteredData), [filteredData]);

  useEffect(() => console.log("Search", search), [search]);
  useEffect(() => console.log("Region", selectedRegion), [selectedRegion]);

  return (
    <main className="bg-light-bg dark:bg-dark-bg">
      <Filters
        search={search}
        selectedRegion={selectedRegion}
        initialData={initialData}
        setSearch={setSearch}
        setSelectedRegion={setSelectedRegion}
        setFilteredData={setFilteredData}
      />
      <div className="flex flex-col sm:flex-row items-center flex-wrap mt-6 ml-4 overflow-y-auto">
        {isLoading
          ? Array.from({ length: 7 }, (_, index) => <Skeletons key={index} />)
          : filteredData?.map((countryData) => {
              return (
                <Card
                  flag={countryData.flags.svg}
                  country={countryData.name.common}
                  population={countryData.population}
                  region={countryData.region}
                  capital={countryData.capital[0]}
                  alt={countryData.flags.alt}
                  key={countryData.name.common}
                />
              );
            })}
      </div>
    </main>
  );
};

export default Home;
