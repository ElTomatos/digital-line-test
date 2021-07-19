/**
 * Vendors
 */
import React from "react";

/**
 * Store
 */
import { useDispatch } from "react-redux";
import {
  openEditRecordModal,
  deleteTableRecord,
} from "../../../actions/creators";

/**
 * Typings
 */
import { TableData } from "../../../features/tables/tablesModel";

type TProps = {
  tableId: string;
  rowId: string;
  data: Record<string, TableData>;
};

/**
 * Expo
 */
const TableRowActions: React.FC<TProps> = ({ tableId, rowId, data }) => {
  /**
   * Redux dispatch
   */
  const dispatch = useDispatch();

  /**
   * Edit row data handler
   */
  const handleEditRow = () => {
    dispatch(openEditRecordModal(tableId, rowId, data[rowId]));
  };

  /**
   * Delete row data handler
   */
  const handleDelete = () => {
    dispatch(deleteTableRecord(tableId, rowId));
  };

  /**
   * JSX
   */
  return (
    <div className={"table-actions"}>
      {/* EDIT ROW */}
      <button
        type={"button"}
        className={"btn btn--link bnt--primary"}
        onClick={handleEditRow}
      >
        Edit
      </button>

      {/* DELETE ROW */}
      <button
        type={"button"}
        className={"btn btn--link bnt--danger"}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TableRowActions;
