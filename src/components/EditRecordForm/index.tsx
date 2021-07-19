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
import { addTableRecord, editTableRecord } from "../../actions/creators";

/**
 * Helpers
 */
import { createDefaultTableRowData } from "../../features/tables/tablesReducer";

/**
 * Typings
 */
import { TableData } from "../../features/tables/tablesModel";

type TProps = {};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

/**
 * Expo
 */
const EditRecordForm: React.FC<TProps> = () => {
  /**
   * Form values state
   */
  const [formData, setFormData] = useState<TableData>(
    createDefaultTableRowData()
  );

  /**
   * Redux state selector
   */
  const { data, rowId, tableId } = useSelector((state) => state.tables.modal);

  /**
   * Redux dispatch
   */
  const dispatch = useDispatch();

  /**
   * Set values from redux to form
   */
  useEffect(() => {
    setFormData(data);
  }, [data]);

  /**
   * Submit handler
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rowId) {
      dispatch(editTableRecord(tableId, rowId, formData));
    } else {
      dispatch(addTableRecord(tableId, formData));
    }
  };

  /**
   * Input change handler
   */
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Select change handler
   */
  const handleCityChange = (e: { value: string; label: string } | null) => {
    const city = e ? e.value : "";
    setFormData({ ...formData, city });
  };

  /**
   * JSX
   */
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
