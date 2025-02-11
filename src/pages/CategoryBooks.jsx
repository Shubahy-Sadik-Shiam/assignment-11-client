import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BookCard from "../cards/BookCard";

const CategoryBooks = () => {

  const {category} = useParams();

  const {data : loadedBooks = [], isLoading} = useQuery({
    queryKey: "categoryBooks", 
    queryFn: async()=> {
      const res = await axios.get(`https://assignment-11-server-rouge-ten.vercel.app/books/${category}`)
      return res.data;
    }
  })
  return (
    <div>
      {
        isLoading && <div className="flex justify-center min-h-screen"><span className="loading  loading-bars loading-lg"></span></div>
      }
      <Helmet>
        <title>Category Books || BookNest </title>
      </Helmet>
      <h2 className="text-center bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-300 text-4xl font-bold py-10">
        Where Every Story Begins: A Grand Book Collection
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10 w-10/12 mx-auto">
        {loadedBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
