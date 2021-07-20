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
};

const TableHead: React.FC<TProps> = ({ columns, canFill }) => (
  <thead className="table__head">
    <tr className="table__head-row">
      {columns.map(({ accessor, title }) => (
        <th className="table__cell table__cell--head" key={accessor}>
          {title}
        </th>
      ))}

      <th className="table__cell table__cell--head table__cell--head-actions">
        {canFill && <TableHeadActions />}
      </th>
    </tr>
  </thead>
);

export default TableHead;
