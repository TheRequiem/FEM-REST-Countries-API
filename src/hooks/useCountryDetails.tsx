import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export type CountryDetails = {
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
  languages: {
    [key: string]: string;
  };
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
};

type Border = {
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
};

const fetchCountryData = (country: string) =>
  axios.get<CountryDetails[]>(
    `https://restcountries.com/v3.1/name/${country}?fullText=true&fields=capital,flags,name,region,population,languages,tld,subregion,currencies,borders`
  );

const fetchBorderCountries = (codes: string) =>
  axios.get<Border[]>(
    `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name`
  );

const useCountryDetails = (country: string) => {
  const [fetchData, setfetchData] = useState<CountryDetails>();

  const { isLoading, isFetching, refetch } = useQuery({
    queryKey: "fetch-country",
    queryFn: () => fetchCountryData(country),
    onSuccess(data) {
      setfetchData(data.data[0]);
    },
    enabled: !!country,
  });

  const borderCodes = fetchData?.borders.join(",") || "";

  const { data: borderData, isLoading: isBorderLoading } = useQuery({
    queryKey: ["fetch-borders", borderCodes],
    queryFn: () => fetchBorderCountries(borderCodes),
    enabled: !!borderCodes,
  });

  const borderNames =
    borderData?.data.map(
      (borderCountry: Border) => borderCountry.name.common
    ) || [];

  return {
    fetchData,
    isLoading,
    isBorderLoading,
    borderNames,
    isFetching,
    refetch,
  };
};

export default useCountryDetails;
