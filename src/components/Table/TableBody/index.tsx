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
  <tbody className={"table__body"}>
    {Object.keys(data).map((id) => (
      <tr key={id}>
        {columns.map(({ accessor }) => (
          <td key={accessor}>{data[id][accessor]}</td>
        ))}
        <td>
          <TableRowActions tableId={tableId} rowId={id} data={data} />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
