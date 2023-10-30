import Header from "./Header/Header";
import SearchOptions from "../components/Artist Search/SearchOptions";

const HomePage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col mt-14 h-screen">
      <Header />
      <div className="flex flex-col justify-between items-center h-2/3 bg-black">
        <div className="mt-20 text-white w-full justify-center flex">
          Gear up your next event with a local prodigy in the music realm.
        </div>
        <div className="mb-20 flex justify-center w-full">
          <SearchOptions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
