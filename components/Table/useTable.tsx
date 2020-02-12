import { useState } from "react";
import { Data } from "../../pages";
import { formatData, FormattedDataSource } from "./helpers/formatData";

export const useTable = (
  datasource: Data[]
): { formattedDataSource: FormattedDataSource[] } => {
  const [formattedDataSource, setFormattedDataSource] = useState<
    FormattedDataSource[]
  >(formatData(datasource));

  return { formattedDataSource };
};
