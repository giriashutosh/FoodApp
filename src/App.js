import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Menu from "./pages/Menu";
import UserContext from "./context/UserContext.js";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return <div className="layout-container">
    <UserContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}>

    <Header/>
    <Outlet/>
    </UserContext.Provider>
  </div>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body/>
        },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu/>
      }
    ],
    errorElement: <Error/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
