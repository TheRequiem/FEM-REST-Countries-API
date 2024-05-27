import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
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

export const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const REGIONS = {
    africa: "Africa",
    america: "America",
    asia: "Asia",
    europe: "Europe",
    oceania: "Oceania",
  };

  const handleSelectionChange = (key: Key) => {
    setSelectedRegion(key.toString());
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  useEffect(() => console.log("Search", search), [search]);
  useEffect(() => console.log("Region", selectedRegion), [selectedRegion]);

  return (
    <main className="pt-24 bg-light-bg dark:bg-dark-bg min-h-screen">
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row mx-4 sm:mx-14 justify-between">
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
          selectedKey={selectedRegion}
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
    </main>
  );
};

export default Home;
