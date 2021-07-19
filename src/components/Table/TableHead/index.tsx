/**
 * Vendors
 */
import React from "react";

/**
 * Components
 */
import TableHeadActions from "../TableHeadActions";

/**
 * Typings
 */
import { TColumn } from "../index";

type TProps = {
  columns: TColumn[];
  canFill: boolean;
  tableId: string;
};

/**
 * Expo
 */
const TableHead: React.FC<TProps> = ({ columns, canFill, tableId }) => (
  <thead className="table__head">
    <tr className="table__head-row">
      {columns.map(({ accessor, title }) => (
        <th className="table__head-cell" key={accessor}>
          {title}
        </th>
      ))}
      {canFill && (
        <th>
          <TableHeadActions tableId={tableId} />
        </th>
      )}
    </tr>
  </thead>
);

export default TableHead;
