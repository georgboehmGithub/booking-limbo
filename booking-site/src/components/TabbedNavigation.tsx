import React, { useState } from "react";
import DetailsTable from "../components/Artist Profile/DetailsTable"; // Import your DetailsTable component
import Track from "./Track";
import ContentWrapper from "./Artist Profile/ContentWrapper";
import ContactDetails from "./Artist Profile/ContactDetails";

const TabbedNavigation = () => {
  const tabs = ["Details", "Tracks", "Contact details"];
  const [activeTab, setActiveTab] = useState(0);

  // Create a function to render the content component based on the active tab
  const renderContent = (tabIndex: number) => {
    switch (tabs[tabIndex]) {
      case "Details":
        return (
          <ContentWrapper>
            <DetailsTable />
          </ContentWrapper>
        );
      case "Tracks":
        return (
          <ContentWrapper>
            <div>
              <Track
                playerSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1620993006&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                artistTitle="city limbo"
                artistLink="https://soundcloud.com/limbo_m"
                trackTitle="Yamato"
                trackLink="https://soundcloud.com/limbo_m/toastymakerz"
              />
            </div>
          </ContentWrapper>
        );
      case "Contact details":
        return (
          <ContentWrapper>
            <ContactDetails />
          </ContentWrapper>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="mx-6">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 mx-1 focus:outline-none 
            
            ${index === activeTab ? "border-b-2 border-black" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">{renderContent(activeTab)}</div>
    </div>
  );
};

export default TabbedNavigation;
