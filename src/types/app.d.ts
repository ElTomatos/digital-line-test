import { Action, Reducer } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { RootState } from "@/reducers/state";
import * as actions from "../actions/creators";

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;
export type CommonAction = ReturnType<InferValueTypes<typeof actions>>;
export type CommonThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  void,
  Action
>;
export type CommonThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type CommonReducer<T> = Reducer<T, CommonAction>;
