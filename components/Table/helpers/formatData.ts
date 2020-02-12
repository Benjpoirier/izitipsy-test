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

export const formatData = (dataSource: Data[]): FormattedDataSource[] => {
  return dataSource.map((data, index) => {
    const filteredTickets = data.tickets.filter(
      ticket => ticket.amount !== 0 && ticket.tips
    );
    const averageProfit = computeAverageProfit(filteredTickets);
    return {
      range: `< ${(index + 1) * 20}$`,
      numberOfTickets: filteredTickets.length,
      averageProfit: isNaN(averageProfit) ? 0 : averageProfit
    };
  });
};
