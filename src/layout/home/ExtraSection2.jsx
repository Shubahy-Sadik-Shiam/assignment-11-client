import pic from "../../assets/pic.png";
const ExtraSection2 = () => {
  return (
    <div className="pb-32">
      <div className="bg-gradient-to-r from-yellow-100 to-pink-200 py-10">
        <h2 className="text-5xl mt-10 mb-20 font-bold text-center">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Book Nest
          </span>{" "}
          Gift Card
        </h2>
        <div className="md:flex gap-4 items-center justify-center">
          <div className="space-y-6 w-6/12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Any Occasion</h3>
              <p>
                The great philosopher Blaise Pascal believed that human
                misfortune was the result of other people’s inability “to sit
                quietly in one’s room
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Special Occasion</h3>
              <p>
                Here are many special occasions in the lives of our friends,
                family and colleagues, and each offers an opportunity to
                commemorate the day with a unique and personalised book.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Cards For Kids</h3>
              <p>
                The thrill of double war. The excitement of shouting "Gin!"
                Every kid knows at least a handful of card classics, and every
                grown up kid remembers the fun of playing them.
              </p>
            </div>
          </div>
          <div>
            <img className="w-96" src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
