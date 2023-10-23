import React from "react";
import "../App.css";
import bannerImage from "../Banner.jpeg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Header from "../components/Banner";
import Artist from "../components/Artist";
import Track from "../components/Track";
import profilePicture from "../pics/profilePicture.jpeg";
import TabbedNavigation from "../components/TabbedNavigation";

const LandingPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-screen">
      <div className="border border-gray-300 max-w-3xl flex-grow flex-col flex">
        <div className="mb-4">
          <Header pathToBannerImage={bannerImage} />
        </div>
        <div className="mb-4 h-1/4">
          <Artist
            name="city limbo"
            description="I am a Hardtechno artist based in Berlin. I created this website to
            get in touch with people and play at your next event. Have a taste of my
            latest set."
            pictureURL={profilePicture}
          />
        </div>
        <div className="h-2/4">
          <TabbedNavigation />
        </div>
        <div className="mb-4 h-1/5">
          <div className="flex justify-center">
            <Button
              onClick={() => navigate("booking")}
              text="Book now"
              color="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
