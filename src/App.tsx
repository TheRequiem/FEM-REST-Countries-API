import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  const Root = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/details/:country" element={<Details />} />
      </Route>
    ),
    {
      basename: "/FEM-REST-Countries-API/",
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
