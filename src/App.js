import logo from './logo.svg';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Country from './components/Country/Country';
import "bootstrap/dist/css/bootstrap.min.css"
import Role from './components/Role/Role';
import Users from './components/User/Users';

function App() {

  const router = createBrowserRouter([
    {
      path: "/adminpayline",
      index:"/adminpayline",
      element: <Country />,
    },
    {
      path: "/user",

      element: <Users />,
    },
    {
      path: "/role",
      
      element: <Role/>,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router}  />
    </React.StrictMode>
  );
}

export default App;
