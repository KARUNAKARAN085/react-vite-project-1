import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <div><Link className="ms-4 me-2" to="/register">Register</Link>|
        <Link className="ms-2" to="/Login">Login</Link></div>
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
  
]);


const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;

/*
  Exercise: 

  1. Create a new route for the path "/contact" with the element <h1>Contact Us</h1>
  2. Create a new route for the path "/services" with the element <h1>Our Services</h1>
  3. Create a new route for the path "/products" with the element <h1>Our Products</h1>
*/