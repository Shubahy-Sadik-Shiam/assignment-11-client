import { Link } from "react-router-dom";
import pic1 from "../../assets/category1.png";
import pic2 from "../../assets/category2.png";
import pic3 from "../../assets/category3.png";
import pic4 from "../../assets/category4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const BookCategories = () => {
  AOS.init();
  return (
    <div>
      <h2 data-aos="fade-up"
     data-aos-duration="1000" className="text-center text-5xl font-bold my-20 bg-gradient-to-r from-yellow-100 to-pink-200 leading-tight py-10">
        Books for Every Taste: Explore <br /> by Category
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-8 w-10/12 mx-auto">
        <Link to="/books/Novel">
          <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="card bg-base-100  hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="card-body items-center">
              <img className="w-28" src={pic1} alt="" />
              <p className="text-4xl font-bold">Novel</p>
            </div>
          </div>
        </Link>
        <Link to="/books/Thriller">
          <div
           data-aos="fade-right"
           data-aos-offset="300"
           data-aos-duration="1000"
           data-aos-easing="ease-in-sine"
          className="card bg-base-100  hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="card-body items-center">
              <img className="w-28" src={pic2} alt="" />
              <p className="text-4xl font-bold">Thriller</p>
            </div>
          </div>
        </Link>
        <Link to="/books/History">
          <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="card bg-base-100  hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="card-body items-center">
              <img className="w-28" src={pic3} alt="" />
              <p className="text-4xl font-bold">History</p>
            </div>
          </div>
        </Link>
        <Link to="/books/Comics">
          <div 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="card bg-base-100  hover:shadow-2xl hover:shadow-pink-500/50">
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
