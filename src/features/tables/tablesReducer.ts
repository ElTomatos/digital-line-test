/**
 * Vendors
 */
import { v4 } from "uuid";

/**
 * Typings
 */
import { TableData, TablesModel } from "./tablesModel";
import { CommonReducer } from "../../@types/app";
import { types } from "../../actions/types/tables";

/**
 * Initial state
 */
export const createDefaultTableRowData = (): TableData => ({
  name: "",
  surname: "",
  age: "",
  city: "",
  id: v4(),
});

export const initialState: TablesModel = {
  list: [
    {
      id: v4(),
      data: [],
    },
  ],
  modal: {
    isOpen: false,
    tableId: "",
    rowId: null,
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
        modal: initialState.modal,
      };
    }

    case types.ADD_TABLE_RECORD: {
      const { tableId, data } = action.payload;

      const updatedList = state.list.map((table) => {
        if (table.id === tableId) {
          return { ...table, data: [...table.data, data] };
        }

        return table;
      });

      return {
        ...state,
        list: updatedList,
        modal: initialState.modal,
      };
    }

    case types.EDIT_TABLE_RECORD: {
      const { tableId, rowId, data } = action.payload;

      const updatedList = state.list.map((table) => {
        if (table.id === tableId) {
          const updatedData = table.data.map((row) => {
            if (row.id === rowId) {
              return data;
            }

            return row;
          });

          return { ...table, data: updatedData };
        }

        return table;
      });

      return {
        ...state,
        list: updatedList,
        modal: initialState.modal,
      };
    }

    case types.DELETE_TABLE_RECORD: {
      const { tableId, rowId } = action.payload;

      const updatedList = state.list.map((table) => {
        if (table.id === tableId) {
          const updatedData = table.data.filter((row) => row.id !== rowId);
          return { ...table, data: updatedData };
        }

        return table;
      });

      return {
        ...state,
        list: updatedList,
      };
    }

    case types.COPY_TABLE: {
      const { tableData } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: v4(),
            data: tableData,
          },
        ],
      };
    }

    case types.DELETE_TABLE: {
      const { tableId } = action.payload;

      const updatedList = state.list.filter((table) => table.id !== tableId);

      return {
        ...state,
        list: updatedList,
      };
    }

    default:
      return state;
  }
};
