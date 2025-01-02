import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../layout/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddBook from "../pages/AddBook";
import ErrorPage from "../pages/ErrorPage";
import AllBooks from "../pages/AllBooks";
import CategoryBooks from "../pages/CategoryBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allBooks"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/books/:category",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({params})=> fetch(`http://localhost:5000/books/${params.category}`)
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
