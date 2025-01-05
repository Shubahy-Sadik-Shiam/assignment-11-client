import axios from "axios";
import Lottie from "lottie-react";
import bookAnimation from "../assets/Lottie/Animation - 1735745592439.json";
import { Helmet } from "react-helmet";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/allBooks", initialData)
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Book added successful",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong!",
        });
      });
    e.target.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Add Book || BookNest </title>
      </Helmet>
      <h2 className="text-center bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-300 text-4xl font-bold py-10">
        Add a New Treasure to the Collection
      </h2>
      <div className="lg:flex justify-center">
        <form onSubmit={handleAddBook} className="my-10 rounded-xl bg-white">
          <div className="max-w-[550px] flex flex-col items-center mx-auto p-4 shadow-xl rounded-xl">
            <div className="md:flex gap-3">
              {/* book img */}
              <div>
                <label className="label">
                  <span className="label-text">Book Cover</span>
                </label>
                <input
                  required
                  type="text"
                  name="cover_photo"
                  placeholder="Upload a image link"
                  className="input input-warning input-bordered w-60"
                />
              </div>
              {/* book title */}
              <div>
                <label className="label">
                  <span className="label-text">Book Title</span>
                </label>
                <input
                  required
                  type="text"
                  name="book_title"
                  placeholder="Book title"
                  className="input input-warning input-bordered w-60"
                />
              </div>
            </div>
            <div className="md:flex gap-3">
              {/* book quantity */}
              <div>
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  required
                  type="number"
                  name="quantity"
                  placeholder="Book quantity"
                  className="input input-warning input-bordered w-60"
                />
              </div>
              {/* Author name */}
              <div>
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="author_name"
                  placeholder="Author name"
                  className="input input-warning input-bordered w-60"
                />
              </div>
            </div>
            <div className="md:flex gap-3">
              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  required
                  defaultValue="Select a category"
                  className="select select-warning select-bordered w-60"
                >
                  <option disabled>Select a category</option>
                  <option>Novel</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Comics</option>
                </select>
              </div>
              {/* rating */}
              <div>
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  required
                  type="number"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered input-warning w-60"
                />
              </div>
            </div>
            <div className="md:flex gap-3">
              {/* short description */}
              <div>
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <textarea
                  required
                  name="description"
                  className="textarea w-60 textarea-bordered textarea-warning"
                  placeholder="Book description"
                ></textarea>
              </div>
              {/* content */}
              <div>
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  required
                  name="content"
                  className="textarea textarea-bordered textarea-warning w-60"
                  placeholder="Book content"
                ></textarea>
              </div>
            </div>
            {/* submit button */}
            <input
              className="btn btn-block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-400 transition duration-500 my-3"
              type="submit"
              value="Add Book"
            />
          </div>
        </form>
        <div className="max-sm:hidden">
          <Lottie
            className="w-96 mx-auto"
            animationData={bookAnimation}
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
