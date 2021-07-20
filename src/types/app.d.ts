import { Reducer } from "redux";
import * as actions from "../actions/creators";

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type CommonAction = ReturnType<InferValueTypes<typeof actions>>;

export type CommonReducer<T> = Reducer<T, CommonAction>;
