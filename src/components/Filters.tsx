import {
  Button,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  SearchField,
  Select,
  SelectValue,
  Key,
} from "react-aria-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Country } from "../hooks/useCountries";

type FiltersProps = {
  search: string;
  selectedRegion: string;
  initialData: Country[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  setFilteredData: React.Dispatch<React.SetStateAction<Country[]>>;
};

const Filters = (props: FiltersProps) => {
  const REGIONS = {
    africa: "Africa",
    americas: "Americas",
    asia: "Asia",
    europe: "Europe",
    oceania: "Oceania",
  };

  const handleSelectionChange = (key: Key) => {
    props.setSelectedRegion(key.toString());
    const filtered =
      props.initialData &&
      [...props.initialData].filter(
        (country) =>
          country.region.toLowerCase() === key.toString().toLowerCase()
      );
    props.setFilteredData(filtered);
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.setSearch(e.currentTarget.value);
    const filtered =
      props.initialData &&
      [...props.initialData].filter((country) => {
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(e.currentTarget.value.toLowerCase());
        const matchesRegion =
          props.selectedRegion === "" ||
          country.region.toLowerCase() === props.selectedRegion.toLowerCase();
        return matchesSearch && matchesRegion;
      });
    props.setFilteredData(filtered);
  };
  return (
    <div className="sticky top-24 w-full z-10">
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row mx-4 sm:mx-14 justify-between items-center">
        <SearchField
          className="flex drop-shadow-md bg-light-element dark:bg-dark-element rounded-md sm:w-80 md:w-128 w-full items-center"
          aria-label="Search for Country"
        >
          <MagnifyingGlassIcon className="size-6 my-3 mx-6 text-light-input dark:text-dark-text" />
          <Input
            type="search"
            className="rounded-md text-light-input dark:bg-dark-element dark:text-dark-text w-full focus:outline-none"
            placeholder="Search for a country..."
            onChange={handleOnChange}
          />
        </SearchField>
        <Select
          selectedKey={props.selectedRegion}
          onSelectionChange={handleSelectionChange}
          placeholder="Filter by Region"
          aria-label="Filter by Region"
          className="focus-visible:outline-none focus:outline-none"
        >
          <Button className="flex bg-light-element dark:bg-dark-element dark:text-dark-text drop-shadow-md rounded-md py-3 pl-4 pr-3 px-6 gap-8 focus-visible:outline-none w-52">
            <SelectValue className="focus:outline-none" />
            <ChevronDownIcon className="size-5" />
          </Button>
          <Popover className="bg-light-element dark:bg-dark-element dark:text-dark-text drop-shadow-md w-52 rounded-md">
            <ListBox className="focus:outline-none p-4">
              {Object.entries(REGIONS).map(([key, value]) => (
                <ListBoxItem
                  id={key}
                  key={key}
                  className="focus:outline-none hover:bg-dark-element hover:text-dark-text dark:hover:bg-light-element dark:hover:text-light-text"
                >
                  {value}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
