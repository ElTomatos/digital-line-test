/**
 * Vendors
 */
import { combineReducers } from "redux";

/**
 * Reducers
 */
import { tablesReducer } from "../reducers/tablesReducer";

/**
 * Root state
 */
import { TablesModel } from "../types/tables";

export type RootState = {
  tables: TablesModel;
};

/**
 * Expo
 */
export const RootReducer = combineReducers<RootState>({
  tables: tablesReducer,
});
