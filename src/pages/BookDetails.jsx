import { useLoaderData } from "react-router-dom";
import authorIcon from "../assets/author.png";
import categoryIcon from "../assets/category.png";
import ReactStars from "react-rating-stars-component";
import Modal from "../cards/Modal";
import { useState } from "react";

const BookDetails = () => {
  const singleBook = useLoaderData();
  const {
    _id,
    cover_photo,
    book_title,
    author_name,
    quantity,
    category,
    rating,
    description,
    content,
  } = singleBook;

  const [available, setAvailable] = useState(quantity);

  return (
    <div className="lg:p-20">
        <div className="card flex-col lg:flex-row rounded-none card-side gap-10">
      <figure className="lg:w-1/2 h-[750px] shadow-xl">
        <img src={cover_photo} alt="Book" />
      </figure>
      <div className="lg:w-1/2 space-y-4 bg-base-100">
        <h2 className="text-4xl font-bold font-serif">{book_title}</h2>
        <div className="flex gap-2 mb-6">
          <img className="object-cover" src={authorIcon} alt="author" />
          <p className="text-gray-400 text-2xl font-semibold">{author_name}</p>
        </div>
        <p>
          <span className="font-semibold">Description:</span>
          {description}
        </p>
        <div className="flex gap-2">
          <img src={categoryIcon} alt="" />
          <p className="font-bold text-lg">{category}</p>
        </div>
        <p className="text-lg">
          <span className="text-green-600">Available</span>:
          <span className="font-bold"> {available}</span>
        </p>
        <div className="flex items-center gap-2">
          <p>Rating:</p>
          <ReactStars count={rating} size={24} color="#ffd700" />
        </div>
        <p>{content}.... <span className="font-semibold underline cursor-pointer">read more</span></p>
        <div className="card-actions">
          <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn btn-primary">Borrow Now</button>
        </div>
      </div>
    </div>
    <Modal singleBook={singleBook} setAvailable={setAvailable}></Modal>
    </div>
  );
};

export default BookDetails;
