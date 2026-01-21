import "./App.css";
import AppLayout from "./components/Applayout/applayout";
import CountryDetails from "./components/Applayout/CountryDetails";
import About from "./Pages/about/about";
import Contact from "./Pages/contact/contact";
import Country from "./Pages/country/country";
import ErrorPage from "./Pages/Error/error";
import Home from "./Pages/home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      { path: "country/:countryName", element: <CountryDetails /> },
      //{ path: "country/:countryName", element: <CountryDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
