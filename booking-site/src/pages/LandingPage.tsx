import React from "react";
import "../App.css";
import bannerImage from "../Banner.jpeg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Artist from "../components/Artist";
import profilePicture from "../pics/profilePicture.jpeg";
import TabbedNavigation from "../components/TabbedNavigation";
import Header from "../components/Header";

const LandingPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col border border-red-500">
      <Header />
      <div className="flex justify-center items-center h-full flex-grow">
        <div className="border border-gray-300 max-w-3xl">
          <div className="mb-4">
            <Banner pathToBannerImage={bannerImage} />
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
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
