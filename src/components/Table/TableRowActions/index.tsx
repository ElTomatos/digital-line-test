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
  deleteTableCloneRecord,
} from "../../../actions/creators";

/**
 * Typings
 */
import { TableData } from "../../../types/tables";

type TProps = {
  tableId?: string;
  rowId: string;
  data: Record<string, TableData>;
};

/**
 * Expo
 */
const TableRowActions: React.FC<TProps> = ({ tableId, rowId, data }) => {
  const dispatch = useDispatch();

  const handleEditRow = () => {
    dispatch(openEditRecordModal(rowId, data[rowId], tableId));
  };

  const handleDelete = () => {
    if (tableId) {
      dispatch(deleteTableCloneRecord(tableId, rowId));
    } else {
      dispatch(deleteTableRecord(rowId));
    }
  };

  return (
    <div className="table__row-actions">
      {/* EDIT ROW */}
      <button
        type="button"
        className="btn btn--link primary-color"
        onClick={handleEditRow}
      >
        Edit
      </button>

      {/* DELETE ROW */}
      <button
        type="button"
        className="btn btn--link danger-color"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TableRowActions;
