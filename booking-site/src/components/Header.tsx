import React from "react";

type Props = {
  pathToBannerImage: string;
};

const Header: React.FC<Props> = ({ pathToBannerImage }) => {
  return pathToBannerImage ? (
    <div className="w-full">
      <img className="w-full h-full object-contain" src={pathToBannerImage} />
    </div>
  ) : (
    <></>
  );
};

export default Header;
