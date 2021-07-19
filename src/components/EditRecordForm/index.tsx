/**
 * Vendors
 */
import React, { useState, useEffect } from "react";
import Select from "react-select";

/**
 * Store
 */
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/hooks";
import {
  addTableRecord,
  editTableCloneRecord,
  editTableRecord,
} from "../../actions/creators";

/**
 * Helpers
 */
import { createDefaultTableRowData } from "../../utils";

/**
 * Selectors
 */
import { tablesModalSelector } from "../../selectors";

/**
 * Typings
 */
import { TableData } from "../../types/tables";

type TProps = {};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const EditRecordForm: React.FC<TProps> = () => {
  const [formData, setFormData] = useState<TableData>(
    createDefaultTableRowData()
  );

  const { data, rowId, tableId } = useSelector(tablesModalSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rowId) {
      if (tableId) {
        dispatch(editTableCloneRecord(tableId, rowId, formData));
      } else {
        dispatch(editTableRecord(rowId, formData));
      }
    } else {
      dispatch(addTableRecord(formData));
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (e: { value: string; label: string } | null) => {
    const city = e ? e.value : "";
    setFormData({ ...formData, city });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <input
          name="name"
          className="form__control form__control--text"
          onChange={handleChange}
          value={formData.name}
        />
      </div>

      <div className="form__item">
        <input
          name="surname"
          className="form__control form__control--text"
          onChange={handleChange}
          value={formData.surname}
        />
      </div>

      <div className="form__item">
        <input
          name="age"
          className="form__control form__control--text"
          onChange={handleChange}
          value={formData.age}
        />
      </div>

      <div className="form__item">
        <Select
          options={options}
          isClearable={false}
          onChange={handleCityChange}
        />
      </div>

      <div className="form__item">
        <button type={"submit"}>Submit</button>
      </div>
    </form>
  );
};

export default EditRecordForm;
