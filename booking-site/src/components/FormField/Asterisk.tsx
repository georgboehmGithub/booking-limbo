import { faAsterisk, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BOOKINGFIELD_TOOLTIP_CONTENTS } from "../../constants/BOOKING";
import { Tooltip } from "react-tooltip";

type Props = {
  required: boolean;
  informationType: string;
};

const Asterisk: React.FC<Props> = ({ required, informationType }) => (
  <>
    <FontAwesomeIcon
      icon={required ? faAsterisk : faInfoCircle}
      size="xs"
      color={required ? "red" : "blue"}
      className="ml-1"
      data-tooltip-id={`my-tooltip-${informationType}`}
      data-tooltip-content={
        BOOKINGFIELD_TOOLTIP_CONTENTS[
          informationType as keyof typeof BOOKINGFIELD_TOOLTIP_CONTENTS
        ]
      }
    />
    <Tooltip id={`my-tooltip-${informationType}`} place="top" />
  </>
);

export default Asterisk;
