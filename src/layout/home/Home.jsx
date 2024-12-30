import Banner from "./Banner/Banner";
import BookCategories from "./BookCategories";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <ExtraSection2></ExtraSection2>
            <ExtraSection1></ExtraSection1>
        </div>
    );
};

export default Home;