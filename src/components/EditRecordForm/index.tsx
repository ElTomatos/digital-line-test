/**
 * Vendors
 */
import React, { useEffect, useState } from "react";

/**
 * Components
 */
import FormItem from "../FormItem";
import Select from "../Select";
import Input from "../Input";

/**
 * Store
 */
import { batch, useDispatch } from "react-redux";
import { useSelector } from "../../store/hooks";
import {
  addTableRecord,
  closeEditRecordModal,
  editTableCloneRecord,
  editTableRecord,
} from "../../actions/creators";

/**
 * Utils
 */
import {
  createDefaultTableRowData,
  errorMessages,
  isNumberFieldValid,
  isTextFieldValid,
  validateEditRecordForm,
} from "../../utils";

/**
 * Selectors
 */
import { tablesModalSelector } from "../../selectors";

/**
 * Config
 */
import { _cities } from "../../config/_cities";

/**
 * Typings
 */
import { TableData } from "../../types/tables";

type TProps = {};

const options = ["Chocolate", "Strawberry", "Vanilla"];

const EditRecordForm: React.FC<TProps> = () => {
  const [formData, setFormData] = useState<TableData>(
    createDefaultTableRowData()
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const { data, rowId, tableId } = useSelector(tablesModalSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateEditRecordForm(formData);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    if (rowId) {
      if (tableId) {
        batch(() => {
          dispatch(closeEditRecordModal());
          dispatch(editTableCloneRecord(tableId, rowId, formData));
        });
      } else {
        batch(() => {
          dispatch(closeEditRecordModal());
          dispatch(editTableRecord(rowId, formData));
        });
      }
    } else {
      batch(() => {
        dispatch(closeEditRecordModal());
        dispatch(addTableRecord(formData));
      });
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (city: string | undefined) => {
    setFormData({ ...formData, city });
  };

  const deleteError = (name: keyof TableData) => {
    const updatedErrors = Object.keys(errors).reduce((acc, k) => {
      if (k === name) {
        return acc;
      }

      acc[k] = errors[k];

      return acc;
    }, {} as Record<string, string>);
    setErrors(updatedErrors);
  };

  const handleBlur = (name: keyof TableData, isNumeric?: boolean) => {
    const isValid = isNumeric
      ? isNumberFieldValid(formData[name])
      : isTextFieldValid(formData[name]);

    if (errors[name] && isValid) {
      deleteError(name);
    } else if (!errors[name] && !isValid) {
      setErrors({ ...errors, [name]: errorMessages[name] });
    }
  };

  const handleFocus = (name: keyof TableData) => {
    if (errors[name]) {
      deleteError(name);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* NAME */}
      <FormItem error={errors.name}>
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </FormItem>

      {/* SURNAME */}
      <FormItem error={errors.surname}>
        <Input
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </FormItem>

      {/* AGE */}
      <FormItem error={errors.age}>
        <Input
          name="age"
          placeholder="Age"
          isNumeric
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </FormItem>

      {/* CITY */}
      <FormItem error={errors.city}>
        <Select
          placeholder="City"
          name="city"
          onChange={handleCityChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={formData.city}
          options={_cities}
        />
      </FormItem>

      <div className="form__item">
        <button className="btn btn--primary btn--block btn--xl" type="submit">
          {rowId ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default EditRecordForm;
