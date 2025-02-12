import pic from "../../assets/pic.png";
import AOS from "aos";
import "aos/dist/aos.css";
const ExtraSection2 = () => {
  AOS.init();
  return (
    <div className="pb-32">
      <div className="bg-gradient-to-r from-yellow-100 to-pink-200 py-10 lg:px-0 md:px-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-5xl mt-10 mb-20 font-bold text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Book Nest
          </span>{" "}
          Gift Card
        </h2>
        <div className="md:flex gap-4 items-center justify-center">
          <div className="space-y-6 md:w-6/12 max-sm:px-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-offset="200"
            >
              <h3 className="text-2xl font-semibold mb-3">Any Occasion</h3>
              <p>
                The great philosopher Blaise Pascal believed that human
                misfortune was the result of other people’s inability “to sit
                quietly in one’s room
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              <h3 className="text-2xl font-semibold mb-3">Special Occasion</h3>
              <p>
                Here are many special occasions in the lives of our friends,
                family and colleagues, and each offers an opportunity to
                commemorate the day with a unique and personalised book.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              <h3 className="text-2xl font-semibold mb-3">Cards For Kids</h3>
              <p>
                The thrill of double war. The excitement of shouting "Gin!"
                Every kid knows at least a handful of card classics, and every
                grown up kid remembers the fun of playing them.
              </p>
            </div>
          </div>
          <div data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              data-aos-offset="300">
            <img className="md:w-96 w-80 max-sm:mt-10 max-sm:mx-auto" src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
