import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/clients/Main";
import Home from "../pages/home/Home";
import Offers from "../pages/menus/Offer/Offers";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/offers',
          element: <Offers/>
        },
      ]
    },
  ]);

  export default router;