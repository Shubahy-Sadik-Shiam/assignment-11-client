import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import BorrowedBooksCard from "../cards/BorrowedBooksCard";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  // const [borrowedBooks, setBorrowedBooks] = useState([]);
  // useEffect(() => {
  //   axiosSecure
  //     .get(`/borrowedBooks?email=${user?.email}`)
  //     .then((res) => {
  //       setBorrowedBooks(res.data);
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //     });
  // }, [user.email]);


  const { data: borrowedBooks = [], refetch, isLoading } = useQuery({
    queryKey: "borrowedBooks",
    queryFn: async () => {
      const res = await axiosSecure.get(`/borrowedBooks?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
       {isLoading && (
        <div className="flex pt-10 w-10/12 mx-auto min-h-screen flex-col gap-4">
          <div className="skeleton h-40 w-full"></div>
          <div className="skeleton h-10 w-28"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      )}
      <Helmet>
        <title>Borrowed Books || BookNest </title>
      </Helmet>
      <div className="space-y-4 w-10/12 mx-auto py-10">
        {borrowedBooks.map((book) => (
          <BorrowedBooksCard
            key={book._id}
            book={book}
            refetch={refetch}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
