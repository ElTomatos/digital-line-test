/**
 * Vendors
 */
import React from "react";

/**
 * Components
 */
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableActions from "./TableActions";

/**
 * Typings
 */
import { TableData } from "../../features/tables/tablesModel";

export type TColumn = {
  accessor: keyof Omit<TableData, "id">;
  title: string;
};

type TProps = {
  id: string;
  columns: TColumn[];
  data: TableData[];
  canFill: boolean;
  canDelete: boolean;
};

/**
 * Expo
 */
const Table: React.FC<TProps> = ({ columns, data, id, canFill, canDelete }) => (
  <>
    <TableActions canDelete={canDelete} data={data} tableId={id} />
    <table className="table">
      <TableHead columns={columns} canFill={canFill} tableId={id} />
      <TableBody columns={columns} data={data} tableId={id} />
    </table>
  </>
);

export default Table;
