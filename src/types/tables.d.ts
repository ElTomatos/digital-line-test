export type TableData = {
  name: string;
  surname: string;
  age: string;
  city: string | undefined;
};

type Table = {
  id: string;
  data: Record<string, TableData>;
};

type TModal = {
  isOpen: boolean;
  tableId?: string;
  rowId: string | null;
  data: TableData;
};

export type TablesModel = {
  data: Record<string, TableData>;
  clones: Record<string, Record<string, TableData>>;
  modal: TModal;
};
