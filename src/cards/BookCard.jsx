import ReactStars from "react-rating-stars-component";
import authorIcon from "../assets/author.png";
import categoryIcon from "../assets/category.png";
const BookCard = ({ book }) => {
  const { cover_photo, book_title, author_name, quantity, category, rating } =
    book;

  return (
    <div className="card rounded-none bg-base-100 shadow-md hover:shadow-yellow-950 hover:shadow-lg transition-transform duration-500 hover:-translate-y-2">
      <figure className="px-10 pt-10 bg-gray-100">
        <img src={cover_photo} alt="Shoes" className="pb-6 w-60 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book_title}</h2>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            <img className="object-cover" src={authorIcon} alt="author" />
            <p>{author_name}</p>
          </div>
          <div className="flex gap-2">
            <img src={categoryIcon} alt="" />
            <p className="font-bold">{category}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <ReactStars count={rating} size={24} color="#ffd700" />
          <p>
            Available:
            <span className="font-bold"> {quantity} </span>
          </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
