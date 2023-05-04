import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Home/About";
import Home from "../Home/Home/HomeBanner";
import Error from "../Home/Error";
import Blog from "../Blog/Blog";
import Login from "../LogIn/Login";
import Register from "../Register/Register";
import Recipes from "../ChefRecipes/Recipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
