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
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return <div className="layout-container">
    <Provider store={store}>
      <UserContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}>

        <Header />
        <Outlet />
        <Footer/>
      </UserContext.Provider>
    </Provider>

  </div>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
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
        element: <Menu />
      },
      {
        path:"/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
