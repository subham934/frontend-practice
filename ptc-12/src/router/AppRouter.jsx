import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Service from "../components/Service";
import Form from "../components/Form";
import MainLayout from "../layout/MainLayout";
import Course from "../components/Course";
import Mobile from "../components/Mobile";
import Laptop from "../components/Laptop";
import CourseDetail from "../components/CourseDetail";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
        children: [
          {
            path: "mobile",
            element: <Mobile />,
          },
          {
            path: "lappy",
            element: <Laptop />,
          },
        ],
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        /* Keep /course as its own main page */
        path: "course",
        element: <Course />,
      },
      {
        /* 2. Route /course/:id directly to CourseDetail */
        path: "course/:id",
        element: <CourseDetail />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            // index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "*",
        element: (
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-red-500 font-black text-7xl">
            Page Not Found
          </h1>
        ),
      },
    ],
  },
]);
