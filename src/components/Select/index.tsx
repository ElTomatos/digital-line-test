/**
 * Vendors
 */
import React from "react";
import { default as RCSelect, Option } from "rc-select";

/**
 * Typings
 */
import { TableData } from "../../types/tables";

type TProps = {
  onChange: (value: string) => void;
  onBlur: (name: keyof TableData, isNumeric?: boolean) => void;
  onFocus: (name: keyof TableData) => void;
  value: string | undefined;
  options: string[];
  name: keyof TableData;
  placeholder: string;
};

/**
 * Expo
 */
const Select: React.FC<TProps> = ({
  onChange,
  onBlur,
  onFocus,
  value,
  options,
  name,
  placeholder,
}) => {
  const handleBlur = () => {
    onBlur(name);
  };

  const handleFocus = () => {
    onFocus(name);
  };

  return (
    <RCSelect
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="form__control form__control--select"
      showSearch
    >
      {options.map((option) => (
        <Option value={option} key={option}>
          {option}
        </Option>
      ))}
    </RCSelect>
  );
};

export default Select;
