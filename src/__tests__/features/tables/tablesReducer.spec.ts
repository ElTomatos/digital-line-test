/**
 * Reducer
 */
import {
  tablesReducer,
  initialState,
} from "../../../features/tables/tablesReducer";

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
} from "../../../actions/creators";

/**
 * Sample data
 */
const sampleRowData = {
  id: "id",
  name: "John",
  surname: "Doe",
  age: "67",
  city: "17",
};

const stateWithData = {
  ...initialState,
  list: [{ id: "id", data: [sampleRowData] }],
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
      openEditRecordModal("some table id", "some row id", sampleRowData)
    );

    expect(current.modal.data).toEqual(sampleRowData);
  });

  it("should handle add row action", () => {
    const initialLength = initialState.list[0].data.length;

    const current = tablesReducer(
      initialState,
      addTableRecord(initialState.list[0].id, sampleRowData)
    );

    expect(current.list[0].data.length).toBe(initialLength + 1);
    expect(current.list[0].data[0]).toEqual(sampleRowData);
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
      editTableRecord("id", sampleRowData.id, newRecord)
    );

    expect(current.list[0].data[0]).toEqual(newRecord);
  });

  it("should handle delete row action", () => {
    const current = tablesReducer(
      stateWithData,
      deleteTableRecord("id", sampleRowData.id)
    );

    expect(current.list[0].data.length).toEqual(0);
  });

  it("should handle copy table action", () => {
    const current = tablesReducer(
      initialState,
      copyTable(initialState.list[0].data)
    );

    expect(current.list.length).toEqual(2);
    expect(current.list[1].data).toEqual(current.list[0].data);
  });

  it("should handle delete table action", () => {
    const current = tablesReducer(
      initialState,
      deleteTable(initialState.list[0].id)
    );

    expect(current.list.length).toEqual(0);
  });
});
