import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BestSellerBookCard from "../../cards/BestSellerBookCard";

const BestSellerBooks = () => {
  const { data: bestSellerBooks = [] } = useQuery({
    queryKey: "bestSellerBooks",
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-11-server-rouge-ten.vercel.app/randomBooks"
      );
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-20 bg-gradient-to-r from-yellow-100 to-pink-200 py-10">
        Best Seller 2025
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto gap-6">
        {bestSellerBooks.map((book) => (
          <BestSellerBookCard key={book._id} book={book}></BestSellerBookCard>
        ))}
      </div>
    </div>
  );
};

export default BestSellerBooks;
