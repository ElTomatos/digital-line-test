export type TableData = {
  name: string;
  surname: string;
  age: string;
  city: string;
};

type Table = {
  id: string;
  data: Record<string, TableData>;
};

type TModal = {
  isOpen: boolean;
  tableId: string;
  rowId: string | null;
  data: TableData;
};

export type TablesModel = { list: Table[]; modal: TModal };
