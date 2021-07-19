/**
 * Vendors
 */
import React from "react";

/**
 * Store
 */
import { useDispatch } from "react-redux";
import { openEditRecordModal } from "../../../actions/creators";

/**
 * Icon
 */
import PlusCircleFilled from "@ant-design/icons/PlusCircleFilled";

/**
 * Typings
 */
type TProps = { tableId?: string };

const TableHeadActions: React.FC<TProps> = ({ tableId }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openEditRecordModal(tableId));
  };

  return (
    <button type="button" className="btn btn--link" onClick={clickHandler}>
      <PlusCircleFilled />
    </button>
  );
};

export default TableHeadActions;
