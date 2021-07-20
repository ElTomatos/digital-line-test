/**
 * Vendors
 */
import { render, screen } from "@testing-library/react";

/**
 * Store
 */
import { Provider } from "react-redux";
import { configureStore } from "../../../store";

/**
 * Components
 */
import TableHead from "../../../components/Table/TableHead";

/**
 * Config
 */
import { _defaultTableColumns } from "../../../config/_defaultTableColumns";

/**
 * Test
 */
describe("TableHead", () => {
  it("should render all columns by config", () => {
    render(
      <Provider store={configureStore()}>
        <table>
          <TableHead columns={_defaultTableColumns} canFill={false} />
        </table>
      </Provider>
    );

    const tableHead = screen.queryAllByRole("columnheader");

    expect(tableHead).toHaveLength(_defaultTableColumns.length + 1); // action column
  });

  it("should render action button if canFill prop true", () => {
    render(
      <Provider store={configureStore()}>
        <table>
          <TableHead columns={_defaultTableColumns} canFill={true} />
        </table>
      </Provider>
    );

    const button = screen.queryByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should not render action button if canFill prop false", () => {
    render(
      <Provider store={configureStore()}>
        <table>
          <TableHead columns={_defaultTableColumns} canFill={false} />
        </table>
      </Provider>
    );

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});
