import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

import './App.scss';

export const App = () => {
  const auth = true;
  return(
    <>
      {
        auth && 
        <RouterProvider router={routes}/>
      }
    </>
  )
}