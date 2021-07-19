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
import { TableData } from "../../../features/tables/tablesModel";
import { TColumn } from "../index";

type TProps = {
  data: TableData[];
  columns: TColumn[];
  tableId: string;
};

/**
 * Expo
 */
const TableBody: React.FC<TProps> = ({ data, columns, tableId }) => (
  <tbody className={"table__body"}>
    {data.map((row) => (
      <tr key={row.id}>
        {columns.map(({ accessor }) => (
          <td key={accessor}>{row[accessor]}</td>
        ))}
        <td>
          <TableRowActions tableId={tableId} rowId={row.id} data={row} />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
