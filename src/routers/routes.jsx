import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/clients/Main";
import Home from "../pages/home/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home/>
        }
      ]
    },
  ]);

  export default router;