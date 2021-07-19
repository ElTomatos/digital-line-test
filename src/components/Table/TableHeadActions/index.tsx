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
type TProps = { tableId: string };

/**
 * Expo
 */
const TableHeadActions: React.FC<TProps> = ({ tableId }) => {
  /**
   * Redux dispatch
   */
  const dispatch = useDispatch();

  /**
   * Click handler
   */
  const clickHandler = () => {
    dispatch(openEditRecordModal(tableId));
  };

  /**
   * JSX
   */
  return (
    <button type="button" className="btn btn--link" onClick={clickHandler}>
      <PlusCircleFilled />
    </button>
  );
};

export default TableHeadActions;
