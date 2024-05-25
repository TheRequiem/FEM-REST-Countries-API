import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="dark:text-red-700">
        Home
        <Link to="/details">Details</Link>
      </div>
    </>
  );
};

export default Home;
