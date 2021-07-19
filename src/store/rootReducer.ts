/**
 * Vendors
 */
import { combineReducers } from "redux";

/**
 * Reducers
 */
import { tablesReducer } from "../features/tables/tablesReducer";

/**
 * Root state
 */
import { TablesModel } from "../features/tables/tablesModel";

export type RootState = {
  tables: TablesModel;
};

/**
 * Expo
 */
export const RootReducer = combineReducers<RootState>({
  tables: tablesReducer,
});
