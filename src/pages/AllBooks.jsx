import { useLoaderData } from "react-router-dom";
import BookCard from "../cards/BookCard";

const AllBooks = () => {
  const books = useLoaderData();
  return (
    <div className="">
      <h2  className="text-center bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-300 text-4xl font-bold py-10">
        Browse Our Book Collection
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10 w-10/12 mx-auto">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
