import { useNavigate } from "react-router-dom";
import mainLogo from "../bookingLimboLogo.jpeg";

const Icon: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} className="h-full w-full">
      <img className="object-contain h-full w-full bg-black" src={mainLogo} />
    </button>
  );
};

export default Icon;
