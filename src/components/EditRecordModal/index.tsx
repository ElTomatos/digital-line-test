/**
 * Vendors
 */
import React from "react";
import Modal from "react-modal";

/**
 * Store
 */
import { useDispatch } from "react-redux";
import { closeEditRecordModal } from "../../actions/creators";

/**
 * Components
 */
import EditRecordForm from "../EditRecordForm";

/**
 * Styles
 */
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "280px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: "4px",
  },
};

/**
 * Typings
 */
type TProps = {
  isOpen: boolean;
};

Modal.setAppElement("#root");

const EditRecordModal: React.FC<TProps> = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeEditRecordModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={modalStyles}
      closeTimeoutMS={300}
    >
      <EditRecordForm />
    </Modal>
  );
};

export default EditRecordModal;
