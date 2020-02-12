import { Data } from "../../../pages";

export interface FormattedDataSource {
  range: string;
  numberOfTickets: number;
  averageProfit: number;
}

const computeAverageProfit = (tickets): any => {
  const sumOfBenefitPercent = tickets.reduce(
    (accumulator, { amount, tips }) => {
      const expense = (2.9 / 100) * amount + 0.3;
      const benefit = tips - expense;
      const benefitInPercent = (benefit * 100) / amount;
      return (accumulator += benefitInPercent);
    },
    0
  );
  return Math.round((sumOfBenefitPercent / tickets.length) * 100) / 100;
};

export const formatData = (dataSource: Data[]): any[] => {
  return dataSource.map((data, index) => {
    return {
      range: `< ${(index + 1) * 20}$`,
      numberOfTickets: data.tickets.length,
      averageProfit: computeAverageProfit(data.tickets)
    };
  });
};
