import categoryIcon from "../assets/category.png";
const BorrowedBooksCard = ({ book }) => {
  const {
    email,
    userName,
    borrowedDate,
    returnDate,
    cover_photo,
    book_title,
    category,
  } = book;
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
            <button className="btn btn-primary">Return</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
