/**
 * Types
 */
import { types } from "../types/tables";

/**
 * Typings
 */
import { TableData } from "../../features/tables/tablesModel";
import { createDefaultTableRowData } from "../../features/tables/tablesReducer";

/**
 * Open row config modal
 */
export const openEditRecordModal = (
  tableId: string,
  rowId: string | null = null,
  data: TableData = createDefaultTableRowData()
) =>
  ({
    type: types.OPEN_EDIT_MODAL,
    payload: { tableId, rowId, data },
  } as const);

/**
 * Close row config modal
 */
export const closeEditRecordModal = () =>
  ({ type: types.CLOSE_EDIT_MODAL } as const);

/**
 * Add table record
 */
export const addTableRecord = (tableId: string, data: TableData) =>
  ({
    type: types.ADD_TABLE_RECORD,
    payload: { tableId, data },
  } as const);

/**
 * Edit table record
 */
export const editTableRecord = (
  tableId: string,
  rowId: string,
  data: TableData
) =>
  ({
    type: types.EDIT_TABLE_RECORD,
    payload: { tableId, rowId, data },
  } as const);

/**
 * Delete table record
 */
export const deleteTableRecord = (tableId: string, rowId: string) =>
  ({
    type: types.DELETE_TABLE_RECORD,
    payload: { tableId, rowId },
  } as const);

/**
 * Create new table from coping
 */
export const copyTable = (tableData: TableData[]) =>
  ({
    type: types.COPY_TABLE,
    payload: { tableData },
  } as const);

/**
 * Delete table
 */
export const deleteTable = (tableId: string) =>
  ({ type: types.DELETE_TABLE, payload: { tableId } } as const);
