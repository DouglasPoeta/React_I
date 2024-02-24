import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./screens/Home/Home";
import LoginForm from "./components/login";
import SignupForm from "./components/cadastro";
import MediaCard from "./components/cards";
import Games from "./screens/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/profile",
        element:<h1>perfil</h1>,
      },
      {
        path:"/games",
        element:<Games/>
      }
    ],
  },
  {
    path:"/login",
    element: <LoginForm/>
  },
  {
    path: "/cadastro",
    element: <SignupForm/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
