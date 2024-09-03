import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/vehicles/slice.js";
import {
  selectorModalIsOpen,
  selectorModalImageSrc,
} from "../../redux/vehicles/selectors.js";
import Modal from "react-modal";
import css from "./ModalImage.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
};

Modal.setAppElement("#root");

export default function ModalImage() {
  const isOpen = useSelector(selectorModalIsOpen);
  const modalImageSrc = useSelector(selectorModalImageSrc);
  const dispatch = useDispatch();

  const handleImageClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleImageClose}
      style={customStyles}
      contentLabel="Example Modal"
      className={css.modal}>
      <button className={css.buttonCloseModal} onClick={handleImageClose}>
        <VscChromeClose className={css.closeIcon} />
      </button>
      <img src={modalImageSrc} alt="" className={css.imgDetailsOrigin} />
    </Modal>
  );
}
