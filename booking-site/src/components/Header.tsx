import Button from "./Button";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

const Header: React.FC<{}> = () => {
  return (
    <div className="w-full fixed top-0 h-14 bg-gray-700 flex justify-center">
      <div className="max-w-3xl w-full flex items-center">
        <div className="w-1/4 h-full">
          <Icon />
        </div>
        <div className="w-1/4">
          <Button text="Start" type="navigation" />
        </div>
        <div className="w-1/4">
          <SearchBar
            onSearch={(x) => {
              console.log(x);
            }}
          />
        </div>
        <div className="w-1/4">
          <Button text="Settings" type="navigation" />
        </div>
      </div>
    </div>
  );
};
export default Header;
