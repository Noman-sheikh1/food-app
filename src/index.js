import About from "./components/About";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Search from "./components/Search";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurantMenu/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/search",
        element:<Search/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);