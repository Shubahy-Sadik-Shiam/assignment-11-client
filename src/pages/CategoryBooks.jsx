import { useLoaderData } from "react-router-dom";
import CategoryBooksCard from "../cards/categoryBooksCard";

const CategoryBooks = () => {
    const loadedBooks = useLoaderData()
    return (
        <div>
            <h2 className="font-bold text-4xl text-center">Where Every Story Begins: A Grand Book Collection</h2>
           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10">
           {
                loadedBooks.map(book=><CategoryBooksCard
                     key={book._id}
                     book={book}></CategoryBooksCard>)
            }
           </div>
        </div>
    );
};

export default CategoryBooks;