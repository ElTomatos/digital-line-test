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
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <EditRecordForm />
    </Modal>
  );
};

export default EditRecordModal;
