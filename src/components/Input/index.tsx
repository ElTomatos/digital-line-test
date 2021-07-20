/**
 * Vendors
 */
import React from "react";
import { TableData } from "../../types/tables";

/**
 * Typings
 */
type TProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (name: keyof TableData, isNumeric?: boolean) => void;
  onFocus: (name: keyof TableData) => void;
  name: string;
  value: string;
  isNumeric?: boolean;
};

/**
 * Expo
 */
const Input: React.FC<TProps> = ({
  onChange,
  name,
  value,
  onFocus,
  onBlur,
  isNumeric,
}) => {
  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name } = target;
    onBlur(name as keyof TableData, isNumeric);
  };

  const handleFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name } = target;
    onFocus(name as keyof TableData);
  };

  return (
    <input
      onChange={onChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      name={name}
      value={value}
      className="form__control form__control--text"
      autoComplete="off"
    />
  );
};

export default Input;
