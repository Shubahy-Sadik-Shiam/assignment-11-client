import { Link } from "react-router-dom";
import pic1 from "../../assets/category1.png";
import pic2 from "../../assets/category2.png";
import pic3 from "../../assets/category3.png";
import pic4 from "../../assets/category4.png";
const BookCategories = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold my-10">
        Books for Every Taste: Explore by Category
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
        <Link to="/books/Novel">
          <div className="card bg-base-100 shadow-xl transition-transform duration-700 hover:scale-90 hover:bg-yellow-200">
            <div className="card-body items-center">
              <img className="w-28" src={pic1} alt="" />
              <p className="text-4xl font-bold">Novel</p>
            </div>
          </div>
        </Link>
        <Link to="/books/Thriller">
          <div className="card bg-base-100 shadow-xl transition-transform duration-700 hover:scale-90 hover:bg-yellow-200">
            <div className="card-body items-center">
              <img className="w-28" src={pic2} alt="" />
              <p className="text-4xl font-bold">Thriller</p>
            </div>
          </div>
        </Link>
        <Link to="/books/History">
          <div className="card bg-base-100 shadow-xl transition-transform duration-700 hover:scale-90 hover:bg-yellow-200">
            <div className="card-body items-center">
              <img className="w-28" src={pic3} alt="" />
              <p className="text-4xl font-bold">History</p>
            </div>
          </div>
        </Link>
        <Link to="/books/Comics">
          <div className="card bg-base-100 shadow-xl transition-transform duration-700 hover:scale-90 hover:bg-yellow-200">
            <div className="card-body items-center">
              <img className="w-28" src={pic4} alt="" />
              <p className="text-4xl font-bold">Comics</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCategories;
