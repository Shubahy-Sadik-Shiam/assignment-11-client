import ReactStars from "react-rating-stars-component";
const BookCard = ({ book }) => {
  const { cover_photo, book_title, author_name, quantity, category, rating } =
    book;

  return (
    <div className="card rounded-none bg-base-100 shadow-md">
      <figure className="px-10 pt-10 bg-gray-100">
        <img src={cover_photo} alt="Shoes" className="pb-6 w-60 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book_title}</h2>
        <div className="flex gap-2 items-center">
          <p>
            <span className="font-semibold">Author: </span>
            {author_name}
          </p>
          <p className="font-bold">{category}</p>
         
        </div>
        <div className="flex gap-4 items-center">
        <ReactStars
            count={rating}
            size={24}
            color="#ffd700"
          />
          <p><span className="font-semibold">Available: </span>{quantity}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
