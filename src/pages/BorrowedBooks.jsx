import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import BorrowedBooksCard from "../cards/BorrowedBooksCard";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowedBooks?email=${user?.email}`)
      .then((res) => {
        setBorrowedBooks(res.data);
      })
      .catch((error) => console.log(error));
  }, [user.email]);
  return (
    <div>
      <div className="space-y-4">
        {borrowedBooks.map((book) => (
          <BorrowedBooksCard 
          key={book._id} 
          book={book}
          borrowedBooks={borrowedBooks} 
          setBorrowedBooks={setBorrowedBooks}></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
