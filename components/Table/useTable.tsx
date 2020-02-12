import { useState, SyntheticEvent, useEffect } from "react";
import { Data } from "../../pages";
import { formatData, FormattedDataSource } from "./helpers/formatData";

export const useTable = (
  datasource: Data[]
): {
  formattedDataSource: FormattedDataSource[];
  onChange: (event: SyntheticEvent) => void;
  indice: string;
} => {
  const [formattedDataSource, setFormattedDataSource] = useState<
    FormattedDataSource[]
  >([]);
  const [indice, setIndice] = useState<string>("2.9");

  const onChange = (event: SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;

    setIndice(target.value);
  };

  useEffect(() => {
    if (indice && !isNaN(parseFloat(indice))) {
      setFormattedDataSource(formatData(datasource, parseFloat(indice)));
    }
  }, [indice, datasource]);

  return { formattedDataSource, onChange, indice };
};
