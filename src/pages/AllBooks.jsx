import { useLoaderData } from "react-router-dom";
import BookCard from "../cards/BookCard";

const AllBooks = () => {
  const books = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">
        Browse Our Book Collection
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
