import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../cards/BookCard";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import axios from "axios";
import { FaSliders } from "react-icons/fa6";

const AllBooks = () => {
  const loadedBooks = useLoaderData();
  const [books, setBooks] = useState(loadedBooks);

  const [isTableView, setIsTableView] = useState(false);
  const [selectedView, setSelectedView] = useState("Card View");

  const handleCardView = () => {
    setIsTableView(false);
    setSelectedView("Card View");
  };

  const handleTableView = () => {
    setIsTableView(true);
    setSelectedView("Table View");
  };

  const handleAvailableBooks = () => {
    axios.get("http://localhost:5000/availableBooks")
    .then(response=>{
      setBooks(response.data)
    })
  }
  return (
    <div>
      <Helmet>
        <title>All Books || BookNest </title>
      </Helmet>
      <h2 className="text-center bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-300 text-4xl font-bold py-10">
        Browse Our Book Collection
      </h2>
      <div className="flex justify-between mt-5 w-10/12 mx-auto mb-4">
        <div>
          <button onClick={handleAvailableBooks} className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
            Show Available Books <FaSliders />
          </button>
        </div>
        <div>
          <details className="dropdown">
            <summary className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 mb-1">
              {selectedView} <MdOutlineArrowDropDownCircle className="text-2xl" />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={handleCardView}>
                <a>Card View</a>
              </li>
              <li onClick={handleTableView}>
                <a>Table View</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      {isTableView ? (
        <div className="w-10/12 mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Cover Photo</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {books.map((book) => (
                  <tr key={book?._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className=" h-16 w-h-16">
                            <img
                              src={book?.cover_photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{book?.book_title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{book?.author_name}</td>
                    <td>{book?.category}</td>
                    <td className="font-bold">{book?.quantity}</td>
                    <th>
                      <Link to={`/book/update/${book?._id}`}>
                        <button className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 btn-xs">
                          Update
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10 w-10/12 mx-auto">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
