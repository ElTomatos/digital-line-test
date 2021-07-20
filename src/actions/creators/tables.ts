/**
 * Types
 */
import { types } from "../types/tables";

/**
 * Typings
 */
import { TableData } from "../../types/tables";
import { createDefaultTableRowData } from "../../utils";

/**
 * Open row config modal
 */
export const openEditRecordModal = (
  rowId: string | null = null,
  data: TableData = createDefaultTableRowData(),
  tableId?: string
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
 * Reset edit form
 */
export const resetEditForm = () => ({ type: types.RESET_EDIT_FORM } as const);

/**
 * Add table record
 */
export const addTableRecord = (data: TableData) =>
  ({
    type: types.ADD_TABLE_RECORD,
    payload: { data },
  } as const);

/**
 * Edit table record
 */
export const editTableRecord = (rowId: string, data: TableData) =>
  ({
    type: types.EDIT_TABLE_RECORD,
    payload: { rowId, data },
  } as const);

/**
 * Edit clone table record
 */
export const editTableCloneRecord = (
  tableId: string,
  rowId: string,
  data: TableData
) =>
  ({
    type: types.EDIT_TABLE_CLONE_RECORD,
    payload: { tableId, rowId, data },
  } as const);

/**
 * Delete table record
 */
export const deleteTableRecord = (rowId: string) =>
  ({
    type: types.DELETE_TABLE_RECORD,
    payload: { rowId },
  } as const);

/**
 * Delete table clone record
 */
export const deleteTableCloneRecord = (tableId: string, rowId: string) =>
  ({
    type: types.DELETE_TABLE_CLONE_RECORD,
    payload: { tableId, rowId },
  } as const);

/**
 * Create new table from coping
 */
export const copyTable = (tableData: Record<string, TableData>) =>
  ({
    type: types.COPY_TABLE,
    payload: { tableData },
  } as const);

/**
 * Delete table
 */
export const deleteTable = (tableId: string) =>
  ({ type: types.DELETE_TABLE, payload: { tableId } } as const);
