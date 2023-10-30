type Props = {
  divStyle: Record<string, string>;
  linkStyles: Record<string, string>;
  playerSrc: string;
  artistTitle: string;
  artistLink: string;
  trackTitle: string;
  trackLink: string;
};

const SoundcloudPlayer: React.FC<Props> = ({
  linkStyles,
  divStyle,
  playerSrc,
  artistTitle,
  artistLink,
  trackTitle,
  trackLink,
}) => (
  <>
    <iframe
      width="80%"
      className="mx-4"
      height="80%"
      allow="autoplay"
      src={playerSrc}
    />
    <div style={divStyle}>
      <a
        href={artistLink}
        title={artistTitle}
        target="_blank"
        style={linkStyles}
        className="ml-4"
      >
        city limbo
      </a>{" "}
      ·{" "}
      <a href={trackLink} title={trackTitle} target="_blank" style={linkStyles}>
        Yamato
      </a>
    </div>
  </>
);

export default SoundcloudPlayer;
