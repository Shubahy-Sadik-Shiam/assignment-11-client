import ReactStars from "react-rating-stars-component";
import categoryIcon from "../assets/category.png";
import authorIcon from "../assets/author.png";
import { Link } from "react-router-dom";
const CategoryBooksCard = ({ book }) => {
  const { _id, cover_photo, book_title, author_name, quantity, category, rating } =
    book;
  return (
    <div className="card rounded-none bg-base-100 shadow-md hover:shadow-[#b3805b] hover:shadow-lg transition-transform duration-500 hover:-translate-y-2">
      <figure className="px-10 pt-10 bg-base-200">
        <img src={cover_photo} alt="book" className="pb-6 w-60 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book_title}</h2>
        <div className="flex justify-between items-center">
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
            <span className="font-bold">      {quantity}</span>
          </p>
        </div>
        <div className="card-actions">
          <Link to={`/book/${_id}`}><button className="btn bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBooksCard;
