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
 * Typings
 */
type TProps = {
  colSpan: number;
  canFill: boolean;
};

/**
 * Expo
 */
const TableEmpty: React.FC<TProps> = ({ colSpan, canFill }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openEditRecordModal());
  };

  return (
    <tbody>
      <tr>
        <td className="table__empty" colSpan={colSpan}>
          <div className={canFill ? "mb-1" : ""}>No data </div>
          {canFill && (
            <button onClick={clickHandler} className="btn btn--primary">
              Add
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default TableEmpty;
