/**
 * Vendors
 */
import { v4 } from "uuid";

/**
 * Utils
 */
import { createDefaultTableRowData } from "../utils";

/**
 * Typings
 */
import { TableData, TablesModel } from "../types/tables";
import { CommonReducer } from "../types/app";
import { types } from "../actions/types/tables";

/**
 * Initial state
 */
export const initialState: TablesModel = {
  data: {},
  clones: {},
  modal: {
    isOpen: false,
    tableId: "",
    rowId: "",
    data: createDefaultTableRowData(),
  },
};

/**
 * Reducer
 */
export const tablesReducer: CommonReducer<TablesModel> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.OPEN_EDIT_MODAL: {
      const { tableId, rowId, data } = action.payload;
      return {
        ...state,
        modal: {
          isOpen: true,
          tableId,
          rowId,
          data,
        },
      };
    }

    case types.CLOSE_EDIT_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false,
        },
      };
    }

    case types.RESET_EDIT_FORM: {
      return {
        ...state,
        modal: initialState.modal,
      };
    }

    case types.ADD_TABLE_RECORD: {
      const { data } = action.payload;

      return {
        ...state,
        data: { ...state.data, [v4()]: data },
      };
    }

    case types.EDIT_TABLE_RECORD: {
      const { rowId, data } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [rowId]: data,
        },
      };
    }

    case types.EDIT_TABLE_CLONE_RECORD: {
      const { rowId, data, tableId } = action.payload;

      return {
        ...state,
        clones: {
          ...state.clones,
          [tableId]: { ...state.clones[tableId], [rowId]: data },
        },
      };
    }

    case types.DELETE_TABLE_RECORD: {
      const { rowId } = action.payload;

      const updatedList = Object.keys(state.data).reduce((acc, k) => {
        if (k === rowId) {
          return acc;
        }
        acc[k] = state.data[k];
        return acc;
      }, {} as Record<string, TableData>);

      return {
        ...state,
        data: updatedList,
      };
    }

    case types.DELETE_TABLE_CLONE_RECORD: {
      const { tableId, rowId } = action.payload;

      const updatedList = Object.keys(state.clones[tableId]).reduce(
        (acc, k) => {
          if (k === rowId) {
            return acc;
          }
          acc[k] = state.clones[tableId][k];
          return acc;
        },
        {} as Record<string, TableData>
      );

      return {
        ...state,
        clones: {
          ...state.clones,
          [tableId]: updatedList,
        },
      };
    }

    case types.COPY_TABLE: {
      const { tableData } = action.payload;
      return {
        ...state,
        clones: { ...state.clones, [v4()]: tableData },
      };
    }

    case types.DELETE_TABLE: {
      const { tableId } = action.payload;

      const updatedList = Object.keys(state.clones).reduce((acc, k) => {
        if (k === tableId) {
          return acc;
        }
        acc[k] = state.clones[k];
        return acc;
      }, {} as Record<string, Record<string, TableData>>);

      return {
        ...state,
        clones: updatedList,
      };
    }

    default:
      return state;
  }
};
