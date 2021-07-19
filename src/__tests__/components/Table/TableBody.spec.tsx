/**
 * Vendors
 */
import { render, screen } from "@testing-library/react";
import { v4 } from "uuid";

/**
 * Store
 */
import { Provider } from "react-redux";
import { configureStore } from "../../../store";

/**
 * Components
 */
import TableBody from "../../../components/Table/TableBody";

/**
 * Config
 */
import { _defaultTableColumns } from "../../../config/_defaultTableColumns";

/**
 * Data
 */

const createData = (length: number) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const row = {
      id: v4(),
      name: "name",
      surname: "surname",
      age: "77",
      city: "17",
    };
    arr.push(row);
  }

  return arr;
};

/**
 * Test
 */
describe("TableBody", () => {
  it("should render all rows by data", () => {
    render(
      <Provider store={configureStore()}>
        <table>
          <TableBody
            data={createData(20)}
            columns={_defaultTableColumns}
            tableId={"ID"}
          />
        </table>
      </Provider>
    );

    const tableRows = screen.queryAllByRole("row");

    expect(tableRows).toHaveLength(20);
  });
});
