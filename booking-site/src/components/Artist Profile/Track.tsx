import SoundcloudPlayer from "./SoundcloudPlayer";

type Props = {
  playerSrc: string;
  artistTitle: string;
  artistLink: string;
  trackTitle: string;
  trackLink: string;
};

const Track: React.FC<Props> = ({
  playerSrc,
  artistTitle,
  artistLink,
  trackTitle,
  trackLink,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <SoundcloudPlayer
        linkStyles={{
          color: "#cccccc",
          textDecoration: "none",
        }}
        divStyle={{
          fontSize: "10px",
          color: "#cccccc",
          overflow: "hidden",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: "100",
        }}
        playerSrc={playerSrc}
        artistTitle={artistTitle}
        artistLink={artistLink}
        trackTitle={trackTitle}
        trackLink={trackLink}
      />
    </div>
  );
};

export default Track;
