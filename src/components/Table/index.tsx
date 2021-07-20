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
import TableEmpty from "./TableEmpty";

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
    <div className="table-responsive">
      <table className="table">
        <TableHead columns={columns} canFill={!isClone} />
        {Object.keys(data).length > 0 ? (
          <TableBody columns={columns} data={data} tableId={id} />
        ) : (
          <TableEmpty colSpan={columns.length + 1} canFill={!isClone} />
        )}
      </table>
    </div>
  </>
);

export default Table;
