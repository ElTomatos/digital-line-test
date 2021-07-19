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
import { TableData } from "../../types/tables";

export type TColumn = {
  accessor: keyof TableData;
  title: string;
};

type TProps = {
  columns: TColumn[];
  data: Record<string, TableData>;
  isClone: boolean;
  id?: string;
};

const Table: React.FC<TProps> = ({ columns, data, id, isClone }) => (
  <>
    <TableActions canDelete={isClone} data={data} tableId={id} />
    <table className="table">
      <TableHead columns={columns} canFill={!isClone} tableId={id} />
      <TableBody columns={columns} data={data} tableId={id} />
    </table>
  </>
);

export default Table;
