import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
};

const fetchCountries = () =>
  axios.get<Country[]>(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
  );

const useCountries = () => {
  const [initialData, setInitialData] = useState<Country[]>([]);
  const [filteredData, setFilteredData] = useState<Country[]>(initialData);

  const { isLoading } = useQuery({
    queryKey: "fetch-all",
    queryFn: fetchCountries,
    onSuccess(data) {
      setInitialData(data.data);
      setFilteredData(data.data);
    },
  });

  return {
    initialData,
    filteredData,
    setFilteredData,
    isLoading,
  };
};

export default useCountries;
