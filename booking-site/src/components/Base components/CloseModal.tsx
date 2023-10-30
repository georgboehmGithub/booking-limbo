import Modal from "react-modal";
import Button from "./Button";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  message: string;
};

const CloseModal: React.FC<Props> = ({ isOpen, onClose, message }) => (
  <Modal
    isOpen={isOpen}
    style={{
      content: {
        top: "50%",
        width: "auto",
        left: "50%",
        paddingLeft: 4,
        paddingRight: 4,
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)", // Center both horizontally and vertically
      },
    }}
  >
    <p className="mb-4">{message}</p>
    <Button onClick={onClose} type="cancel" text="Close" />
  </Modal>
);

export default CloseModal;
