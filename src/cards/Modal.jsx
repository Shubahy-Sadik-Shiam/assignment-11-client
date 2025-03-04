import moment from "moment";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Toast from "../hooks/Toast";

const Modal = ({ singleBook, setAvailable, setIsBorrowed }) => {
  const { user } = useAuth();
  const { _id, cover_photo, book_title, category } = singleBook;

  const email = user?.email;
  const userName = user?.displayName;
  const borrowedDate = moment().format("Do MMMM, YYYY");

  const handleSubmit = (e) => {
    e.preventDefault();
    const returnDate = e.target.returnDate.value;

    const borrowInfo = {
      email,
      book_id: _id,
      userName,
      borrowedDate,
      returnDate,
      cover_photo,
      book_title,
      category,
    };

    axios
      .post(
        "https://assignment-11-server-rouge-ten.vercel.app/borrowedBooks",
        borrowInfo
      )
      .then((response) => {
        if (response.data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Book borrowed and added to the Borrowed Books page",
          });
          setAvailable((prev) => prev - 1);
          setIsBorrowed(true);
          
          fetch("https://assignment-11-server-rouge-ten.vercel.app/allBooks", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ id: _id }),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
            });
        }else{
          Toast.fire({
            icon: "error",
            title: "Book already borrowed!",
          });
        }
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong!",
        });
      });

   
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <h2 className="text-xl mb-4 font-semibold text-center">
            Fill up the form to borrow book
          </h2>
          <form onSubmit={handleSubmit} className="space-y-2 w-4/6 mx-auto">
            <input
              defaultValue={userName}
              type="text"
              name="userName"
              placeholder="Type here"
              className="input input-warning input-bordered w-full"
            />
            <input
              defaultValue={email}
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-warning input-bordered w-full"
            />
            <input
              type="date"
              required
              name="returnDate"
              placeholder="Type here"
              className="input input-bordered input-warning w-full"
            />
            <button
              type="submit"
              className="btn btn-block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
