type Props = {
  divStyle: Record<string, string>;
  linkStyles: Record<string, string>;
};

const SoundcloudPlayer: React.FC<Props> = ({ linkStyles, divStyle }) => (
  <>
    <iframe
      width="80%"
      className="mx-4"
      height="80%"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1603444233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
    <div style={divStyle}>
      <a
        href="https://soundcloud.com/limbo_m"
        title="city limbo"
        target="_blank"
        style={linkStyles}
        className="ml-4"
      >
        city limbo
      </a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/limbo_m/yamato"
        title="Yamato"
        target="_blank"
        style={linkStyles}
      >
        Yamato
      </a>
    </div>
  </>
);

export default SoundcloudPlayer;
