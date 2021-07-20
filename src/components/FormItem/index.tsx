/**
 * Vendors
 */
import React from "react";
import { addErrorClass } from "../../utils";

/**
 * Typings
 */
type TProps = {
  error: string | undefined;
};

/**
 * Expo
 */
const FormItem: React.FC<TProps> = ({ error, children }) => (
  <div className={addErrorClass("form__item", error)}>
    {children} {error && <div className="form__feedback">{error}</div>}
  </div>
);

export default FormItem;
