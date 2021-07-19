export type TableData = {
  name: string;
  surname: string;
  age: string;
  city: string;
  id: string;
};

type Table = {
  id: string;
  data: TableData[];
};

type TModal = {
  isOpen: boolean;
  tableId: string;
  rowId: string | null;
  data: TableData;
};

export type TablesModel = { list: Table[]; modal: TModal };
