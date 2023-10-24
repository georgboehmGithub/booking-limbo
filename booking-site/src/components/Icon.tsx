import mainLogo from "../bookingLimboLogo.jpeg";

const Icon: React.FC<{}> = () => {
  return (
    <img className="object-contain h-full w-full bg-black" src={mainLogo} />
  );
};

export default Icon;
