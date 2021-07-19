/**
 * Vendors
 */
import React from "react";

/**
 * Store
 */
import { useSelector } from "../../store/hooks";

/**
 * Components
 */
import Table from "../Table";
import EditRecordModal from "../EditRecordModal";

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

const App: React.FC<TProps> = () => {
  const { data, clones, modal } = useSelector(tablesSelector);

  return (
    <div>
      <Table columns={_defaultTableColumns} data={data} isClone={false} />
      {Object.keys(clones).map((id) => {
        return (
          <Table
            columns={_defaultTableColumns}
            data={clones[id]}
            key={id}
            id={id}
            isClone
          />
        );
      })}
      <EditRecordModal isOpen={modal.isOpen} />
    </div>
  );
};

export default App;
