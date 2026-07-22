import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import About from "../components/About";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
