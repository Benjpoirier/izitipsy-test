import { useState } from "react";
import { Data } from "../../pages";

export const useTable = (datasource: Data[]) => {
  const [formattedDataSource, setFormattedDataSource] = useState([]);
  return { formattedDataSource };
};
