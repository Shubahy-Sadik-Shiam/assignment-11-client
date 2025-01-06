import { useLoaderData, useParams } from "react-router-dom";
import bgImg from "../assets/slider1.jpg";
import Toast from "../hooks/Toast";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
const UpdateBook = () => {
  const [book, setBook] = useState({})

  const {id} = useParams()

  const axiosSecure = useAxiosSecure();

  useEffect(()=>{
    axiosSecure
    .get(`https://assignment-11-server-rouge-ten.vercel.app/book/${id}`)
    .then(response=>{
      setBook(response.data)
    })
  },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const updatedBook = initialData;

    fetch(`https://assignment-11-server-rouge-ten.vercel.app/updateBook/${book?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        Toast.fire({
          icon: "success",
          title: "Book information updated",
        });
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Helmet>
        <title>Update Book || BookNest </title>
      </Helmet>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="card bg-base-100 bg-opacity-20 backdrop-blur-md w-full max-w-md shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-white">Photo URL</span>
            </label>
            <input
              defaultValue={book?.cover_photo}
              name="cover_photo"
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Book Name</span>
            </label>
            <input
              defaultValue={book?.book_title}
              name="book_title"
              type="text"
              placeholder="Book Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Author Name</span>
            </label>
            <input
              defaultValue={book?.author_name}
              name="author_name"
              type="text"
              placeholder="Author Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Category</span>
            </label>
            <select
              name="category"
              required
              defaultValue={book?.category}
              className="select select-bordered"
            >
              <option disabled>Select a category</option>
              <option>Novel</option>
              <option>Thriller</option>
              <option>History</option>
              <option>Comics</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-white">Rating</span>
            </label>
            <input
              defaultValue={book?.rating}
              name="rating"
              type="number"
              placeholder="Give a rating between 1-5"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
              Update Book Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
