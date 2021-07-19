/**
 * Reducer
 */
import { tablesReducer, initialState } from "../../reducers/tablesReducer";

/**
 * Actions
 */
import {
  openEditRecordModal,
  closeEditRecordModal,
  addTableRecord,
  editTableRecord,
  deleteTableRecord,
  copyTable,
  deleteTable,
  editTableCloneRecord,
  deleteTableCloneRecord,
} from "../../actions/creators";

/**
 * Sample data
 */
const sampleRowData = {
  name: "John",
  surname: "Doe",
  age: "67",
  city: "17",
};

const stateWithData = {
  ...initialState,
  data: { id: sampleRowData },
  clones: { table: { id: sampleRowData } },
};

/**
 * Tests
 */
describe("tables reducer", () => {
  it("should handle initial state", () => {
    // ts ignore for not existing "unknown" action type
    // @ts-ignore
    expect(tablesReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle open modal action", () => {
    const current = tablesReducer(
      initialState,
      openEditRecordModal("some table id")
    );

    expect(current.modal.isOpen).toEqual(true);
  });

  it("should handle close modal action", () => {
    const state = {
      ...initialState,
      modal: { ...initialState.modal, isOpen: true },
    };

    const current = tablesReducer(state, closeEditRecordModal());

    expect(current.modal.isOpen).toEqual(false);
  });

  it("should correctly set modal data", () => {
    const current = tablesReducer(
      initialState,
      openEditRecordModal("some row id", sampleRowData)
    );

    expect(current.modal.data).toEqual(sampleRowData);
  });

  it("should handle add row action", () => {
    const initialLength = Object.keys(initialState.data).length;

    const current = tablesReducer(initialState, addTableRecord(sampleRowData));

    expect(Object.keys(Object.keys(current.data)).length).toBe(
      initialLength + 1
    );
    expect(Object.values(current.data)[0]).toEqual(sampleRowData);
  });

  it("should handle edit row action", () => {
    const newRecord = {
      id: "new id",
      name: "Will",
      surname: "Smith",
      age: "89",
      city: "Saint Petersburg",
    };

    const current = tablesReducer(
      stateWithData,
      editTableRecord("id", newRecord)
    );

    expect(current.data.id).toEqual(newRecord);
  });

  it("should handle edit clone table row action", () => {
    const newRecord = {
      id: "new id",
      name: "Will",
      surname: "Smith",
      age: "89",
      city: "Saint Petersburg",
    };

    const current = tablesReducer(
      stateWithData,
      editTableCloneRecord("table", "id", newRecord)
    );

    expect(current.clones.table.id).toEqual(newRecord);
  });

  it("should handle delete row action", () => {
    const current = tablesReducer(stateWithData, deleteTableRecord("id"));

    expect(Object.keys(current.data).length).toEqual(0);
  });

  it("should handle delete clone table row action", () => {
    const current = tablesReducer(
      stateWithData,
      deleteTableCloneRecord("table", "id")
    );

    expect(Object.keys(current.clones.table).length).toEqual(0);
  });

  it("should handle copy table action", () => {
    const current = tablesReducer(
      stateWithData,
      copyTable(stateWithData.data)
    );
    expect(Object.keys(current.clones).length).toEqual(2);
    expect(Object.values(current.clones)[0]).toEqual(current.data);
  });

  it("should handle delete table action", () => {
    const current = tablesReducer(stateWithData, deleteTable("table"));

    expect(Object.keys(current.clones).length).toEqual(0);
  });
});
