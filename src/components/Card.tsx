import { Link } from "react-router-dom";

type CardProps = {
  country: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alt: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col drop-shadow-md bg-light-element dark:bg-dark-element w-48 sm:w-72 rounded-md m-10 sm:min-h-96">
      <Link to="/details">
        <img src={props.flag} alt={props.alt} className="rounded-t-md" />
        <h2 className="dark:text-dark-text font-extrabold px-4 pb-2 pt-5 sm:pt-7">
          {props.country}
        </h2>
        <p className="pl-4 dark:text-dark-text font-light">
          <span className="font-semibold">Population: </span>
          {props.population}
        </p>
        <p className="pl-4 dark:text-dark-text font-light">
          <span className="font-semibold">Region: </span>
          {props.region}
        </p>
        <p className="pl-4 dark:text-dark-text font-light pb-6 sm:pb-11">
          <span className="font-semibold">Capital: </span>
          {props.capital}
        </p>
      </Link>
    </div>
  );
};

export default Card;
