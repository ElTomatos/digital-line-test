/**
 * Vendors
 */
import React from "react";

/**
 * Store
 */
import { useDispatch } from "react-redux";
import { copyTable, deleteTable } from "../../../actions/creators";

/**
 * Typings
 */
import { TableData } from "../../../types/tables";

type TProps = {
  canDelete: boolean;
  data: Record<string, TableData>;
  tableId?: string;
};

const TableActions: React.FC<TProps> = ({ canDelete, data, tableId }) => {
  const dispatch = useDispatch();

  const handleCopy = () => {
    dispatch(copyTable(data));
  };

  const handleDelete = () => {
    if (tableId) {
      dispatch(deleteTable(tableId));
    }
  };

  return (
    <div className="table__actions">
      {/* COPY TABLE */}
      <button className="btn btn--primary" type="button" onClick={handleCopy}>
        Copy table
      </button>

      {/* DELETE TABLE */}
      {canDelete && (
        <button
          className="btn btn--link btn--danger"
          type="button"
          onClick={handleDelete}
        >
          delete
        </button>
      )}
    </div>
  );
};

export default TableActions;
