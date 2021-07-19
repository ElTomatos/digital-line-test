import { RootState } from "../store/rootReducer";

export const tablesSelector = (state: RootState) => state.tables;

export const tablesModalSelector = (state: RootState) =>
  tablesSelector(state).modal;
