import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home,{loader as notesLoader} from "./pages/Home";
import Note from "./pages/Note";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: notesLoader
  },
  {
    path: "/notes/:id",
    element: <Note />,
    loader: notesLoader
  }
]);


const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;