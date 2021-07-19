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
import { TableData } from "../../../features/tables/tablesModel";

type TProps = {
  canDelete: boolean;
  data: TableData[];
  tableId: string;
};

/**
 * Expo
 */
const TableActions: React.FC<TProps> = ({ canDelete, data, tableId }) => {
  /**
   * Redux dispatch
   */
  const dispatch = useDispatch();

  /**
   * Handle copy table
   */
  const handleCopy = () => {
    dispatch(copyTable(data));
  };

  /**
   * Handle delete table
   */
  const handleDelete = () => {
    dispatch(deleteTable(tableId));
  };

  /**
   * JSX
   */
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
