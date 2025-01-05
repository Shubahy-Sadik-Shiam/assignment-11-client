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
import BookDetails from "../pages/BookDetails";
import BorrowedBooks from "../pages/BorrowedBooks";
import UpdateBook from "../pages/UpdateBook";

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
        path: "/book/update/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            {" "}
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:category",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.category}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
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
