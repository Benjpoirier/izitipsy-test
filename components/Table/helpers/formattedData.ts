import { Data } from "../../../pages";

export interface FormattedDataSource {
  range: string;
  numberOfTickets: number;
  averageProfit: number;
}

export const formattedData = (dataSource: Data[]): FormattedDataSource[] => {
  return [
    {
      range: "<20",
      numberOfTickets: 10,
      averageProfit: 1
    }
  ];
};
