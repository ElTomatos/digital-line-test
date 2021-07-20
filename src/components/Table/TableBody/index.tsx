/**
 * Vendors
 */
import React from "react";

/**
 * Components
 */
import TableRowActions from "../TableRowActions";

/**
 * Typings
 */
import { TableData } from "../../../types/tables";
import { TColumn } from "../index";

type TProps = {
  data: Record<string, TableData>;
  columns: TColumn[];
  tableId?: string;
};

const TableBody: React.FC<TProps> = ({ data, columns, tableId }) => (
  <tbody className="table__body">
    {Object.keys(data).map((id) => (
      <tr className="table__row" key={id}>
        {columns.map(({ accessor }) => (
          <td className="table__cell" key={accessor}>
            {data[id][accessor]}
          </td>
        ))}
        <td className="table__cell">
          <TableRowActions tableId={tableId} rowId={id} data={data} />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
