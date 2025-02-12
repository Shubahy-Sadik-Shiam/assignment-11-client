import Banner from "./Banner/Banner";
import BestSellerBooks from "./BestSellerBooks";
import BookCategories from "./BookCategories";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || BookNest </title>
            </Helmet>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <BestSellerBooks></BestSellerBooks>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;