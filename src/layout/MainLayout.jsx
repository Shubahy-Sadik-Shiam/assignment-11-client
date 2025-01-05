import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

 const Spinner = () => (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );

const MainLayout = () => {
   const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F1F8] min-h-screen">
            {isLoading && <Spinner></Spinner>}
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;