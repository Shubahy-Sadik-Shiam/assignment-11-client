import pic from "../../assets/pic.png"
const ExtraSection2 = () => {
    return (
        <div className="my-20 bg-yellow-300">
            <h2 className="text-4xl mb-10 font-bold text-center">Book Nest Gift Card</h2>
            <div className="md:flex gap-4 items-center justify-center">
                <div className="space-y-6 w-6/12">
                <div>
                    <h3 className="text-2xl font-semibold mb-3">Any Occasion</h3>
                    <p>The great philosopher Blaise Pascal believed that human misfortune was the result of other people’s inability “to sit quietly in one’s room</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3">Special Occasion</h3>
                    <p>Here are many special occasions in the lives of our friends, family and colleagues, and each offers an opportunity to commemorate the day with a unique and personalised book.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3">Cards For Kids</h3>
                    <p>The thrill of double war. The excitement of shouting "Gin!" Every kid knows at least a handful of card classics, and every grown up kid remembers the fun of playing them.</p>
                </div>
                </div>
                <div>
                    <img className="w-96" src={pic} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;