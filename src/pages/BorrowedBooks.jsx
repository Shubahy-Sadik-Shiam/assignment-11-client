import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import BorrowedBooksCard from "../cards/BorrowedBooksCard";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/borrowedBooks?email=${user?.email}`)
      .then((res) => {
        setBorrowedBooks(res.data);
      })
      .catch((error) => {
        // console.log(error)
      });
  }, [user.email]);
  return (
    <div>
      <Helmet>
        <title>Borrowed Books || BookNest </title>
      </Helmet>
      <div className="space-y-4 w-10/12 mx-auto py-10">
        {borrowedBooks.map((book) => (
          <BorrowedBooksCard
            key={book._id}
            book={book}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
