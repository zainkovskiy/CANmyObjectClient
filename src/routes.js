import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from 'components/Layout';
import { EditObject } from 'components/EditObject';
import { NewObject } from 'components/NewObject';
import { MyObjects, objectsLoader } from 'components/MyObjects';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        path: '/',
        element: <MyObjects/>,
        loader: objectsLoader
      },
      {
        path: 'edit/:id',
        element: <EditObject/>,
      },
      {
        path: 'new',
        element: <NewObject/>,
      },
      {
        path: '*',
        element: <span className="text">page not found</span>,
      },
    ]
  }
])