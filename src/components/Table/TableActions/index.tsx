/**
 * Vendors
 */
import React from "react";

/**
 * Icons
 */
import CloseOutlined from "@ant-design/icons/CloseOutlined";

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
    dispatch(deleteTable(tableId!));
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
          className="btn btn--link danger-color table__actions-close"
          type="button"
          onClick={handleDelete}
        >
          <CloseOutlined />
        </button>
      )}
    </div>
  );
};

export default TableActions;
