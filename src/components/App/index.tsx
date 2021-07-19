/**
 * Vendors
 */
import React from "react";

/**
 * Components
 */
import Table from "../Table";
import EditRecordModal from "../EditRecordModal";

/**
 * Store
 */
import { useSelector } from "../../store/hooks";

/**
 * Config
 */
import { _defaultTableColumns } from "../../config/_defaultTableColumns";

/**
 * Selectors
 */
import { tablesSelector } from "../../selectors";

/**
 * Typings
 */
type TProps = {};

/**
 * Expo
 */
const App: React.FC<TProps> = () => {
  const { list, modal } = useSelector(tablesSelector);

  /**
   * JSX
   */
  return (
    <div>
      {list.map((table, index) => {
        const isFirst = index === 0;
        return (
          <Table
            columns={_defaultTableColumns}
            data={table.data}
            key={table.id}
            id={table.id}
            canFill={isFirst}
            canDelete={!isFirst}
          />
        );
      })}
      <EditRecordModal isOpen={modal.isOpen} />
    </div>
  );
};

export default App;
