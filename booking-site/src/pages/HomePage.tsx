import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Banner from "../components/Banner";
import bannerImage from "../Banner.jpeg";
const HomePage: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-14 h-screen border border-green-500">
      <Header />
      <div className="flex flex-col justify-between items-center h-1/2 border border-red-500">
        <div className="border border-yellow-500 mt-20">
          Gear up your next event with a local Sentinel in the music realm.
        </div>
        <div className="border border-yellow-500 mb-20">options</div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          type="primary"
          text="Search"
          onClick={() => navigate("/user")}
        />
      </div>
    </div>
  );
};

export default HomePage;
