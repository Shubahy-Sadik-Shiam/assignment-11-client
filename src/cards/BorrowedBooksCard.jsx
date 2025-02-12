import Swal from "sweetalert2";
import categoryIcon from "../assets/category.png";
const BorrowedBooksCard = ({ book, refetch }) => {
  const {
    _id,
    email,
    userName,
    borrowedDate,
    returnDate,
    cover_photo,
    book_title,
    category,
    book_id,
  } = book;

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-rouge-ten.vercel.app/borrowedBooks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Returned!",
                text: "Book Returned Successfully.",
                icon: "success",
              });
              refetch();
              
              // added quantity of book
              fetch("https://assignment-11-server-rouge-ten.vercel.app/allBooks2", {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ id: book_id }),
              })
                .then((res) => res.json())
                .then((data) => {
                  // console.log(data);
                });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-md">
      <figure className="p-6 bg-gray-100">
        <img className="w-28" src={cover_photo} alt="Book" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="card-title text-2xl">{book_title}</h2>
            <div className="flex gap-2">
              <img src={categoryIcon} alt="" />
              <p className="font-bold">{category}</p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold">Borrowed Date:</span>{" "}
                {borrowedDate}
              </p>
              <p>
                <span className="font-semibold">Return Date:</span> {returnDate}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleReturn(_id)}
              className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
