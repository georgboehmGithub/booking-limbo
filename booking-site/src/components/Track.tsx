import SoundcloudPlayer from "./SoundcloudPlayer";

type Props = {};

const Track: React.FC<Props> = ({}) => {
  // TODO: mx-4 in parent
  return (
    <div className="">
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
        />
        <p className="mx-4 mt-4 text-center">
          Send me a booking request and I'll contact you shortly!
        </p>
      </div>
    </div>
  );
};

export default Track;
