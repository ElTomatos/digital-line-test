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
import TableActions from "../../../components/Table/TableActions";

/**
 * Test
 */
describe("TableActions", () => {
  it("should render delete button if canDelete prop true", () => {
    render(
      <Provider store={configureStore()}>
        <TableActions canDelete={true} data={[]} tableId={"ID"} />
      </Provider>
    );

    const deleteButton = screen.queryByRole("button", { name: "delete" });

    expect(deleteButton).toBeInTheDocument();
  });

  it("should not render delete button if canDelete prop false", () => {
    render(
      <Provider store={configureStore()}>
        <TableActions canDelete={false} data={[]} tableId={"ID"} />
      </Provider>
    );

    const deleteButton = screen.queryByRole("button", { name: "delete" });

    expect(deleteButton).not.toBeInTheDocument();
  });
});
