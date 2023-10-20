import React from "react";

type Props = {
  name: string;
  description: string;
  pictureURL: string;
};

const Artist: React.FC<Props> = ({ name, description, pictureURL }) => {
  return (
    <div className="h-full flex flex-row">
      <div id="artistShowcase" className="flex-grow rounded-lg w-1/4">
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center justify-center h-3/4">
            <img
              className="rounded-full object-contain h-full max-w-full max-h-full"
              src={pictureURL}
              alt={name}
            />
          </div>
          <div className="font-bold">{name}</div>
        </div>
      </div>
      <div
        id="artistDescription"
        className="flex-grow w-1/2 flex items-center mb-10 mx-4"
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Artist;
