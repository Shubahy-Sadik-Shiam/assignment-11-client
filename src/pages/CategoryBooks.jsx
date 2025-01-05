import { useLoaderData } from "react-router-dom";
import CategoryBooksCard from "../cards/categoryBooksCard";
import { Helmet } from "react-helmet";

const CategoryBooks = () => {
  const loadedBooks = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Category Books || BookNest </title>
      </Helmet>
      <h2 className="text-center bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-300 text-4xl font-bold py-10">
        Where Every Story Begins: A Grand Book Collection
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10 w-10/12 mx-auto">
        {loadedBooks.map((book) => (
          <CategoryBooksCard key={book._id} book={book}></CategoryBooksCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
