import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Banner from "../components/Banner";
import bannerImage from "../Banner.jpeg";
import SearchOptions from "../components/SearchOptions";
import backgroundImage from "../pics/homescreenBackground.jpg";

const HomePage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col mt-14 h-screen">
      <Header />
      <div className="flex flex-col justify-between items-center h-2/3 bg-black">
        <div className="mt-20 text-white">
          Gear up your next event with a local prodigy in the music realm.
        </div>
        <div className="mb-20 w-1/2 ">
          <SearchOptions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
