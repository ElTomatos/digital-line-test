/**
 * Vendors
 */
import { Store, createStore } from "redux";

/**
 * Root state
 */
import { RootState, RootReducer } from "./rootReducer";

/**
 * Expo
 */
export function configureStore(initialState?: RootState): Store<RootState> {
  return createStore(RootReducer, initialState) as Store<RootState>;
}
