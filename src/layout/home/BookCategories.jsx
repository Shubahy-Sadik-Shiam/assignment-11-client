import pic1 from "../../assets/category1.png"
import pic2 from "../../assets/category2.png"
import pic3 from "../../assets/category3.png"
import pic4 from "../../assets/category4.png"
const BookCategories = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold my-10">
        Books for Every Taste: Explore by Category
      </h2>
      <div className="md:flex gap-8 justify-center mb-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <img className="w-32" src={pic1} alt="" />
          <p className="text-4xl font-bold">Novel</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <img className="w-32" src={pic2} alt="" />
          <p className="text-4xl font-bold">Thriller</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <img className="w-32" src={pic3} alt="" />
          <p className="text-4xl font-bold">History</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <img className="w-32" src={pic4} alt="" />
          <p className="text-4xl font-bold">Comics</p>
        </div>
      </div>
      </div>
      {/* novel
            thriller
            history
            comics */}
    </div>
  );
};

export default BookCategories;
