import axios from "axios";
import Lottie from "lottie-react";
import bookAnimation from "../assets/Lottie/Animation - 1735745592439.json";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/allBooks", initialData)
      .then((response) => {
        console.log(response);
        alert("Book added successful");
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Add a Book</h2>
      <div className="lg:flex justify-center">
        <form onSubmit={handleAddBook} className="my-4">
          <div className="border max-w-[550px] flex flex-col rounded-2xl items-center mx-auto p-4">
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
                  className="input input-bordered w-60"
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
                  className="input input-bordered w-60"
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
                  className="input input-bordered w-60"
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
                  className="input input-bordered w-60"
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
                  className="select select-bordered w-60"
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
                  className="input input-bordered w-60"
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
                  className="textarea w-60 textarea-bordered"
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
                  className="textarea textarea-bordered w-60"
                  placeholder="Book content"
                ></textarea>
              </div>
            </div>
            {/* submit button */}
            <input
              className="btn btn-block my-3"
              type="submit"
              value="Add Book"
            />
          </div>
        </form>
        <div className="max-sm:hidden">
          <Lottie className="w-96 mx-auto" animationData={bookAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
