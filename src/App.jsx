import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./pages/Todos";
import { loader as todosloader } from "./pages/Todos";

//create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos/>,
    //link the loader
    loader: todosloader
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;