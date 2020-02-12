const GROUP_BY_RANGE = 20;

interface SetOfTickets {
  gte: number;
  lte: number;
}

export const createSetOfTicketsByRangeFromMaxAmount = (
  maxAmount: number
): SetOfTickets[] => {
  const length = maxAmount / GROUP_BY_RANGE;
  return Array.from(
    { length },
    (_item, index): SetOfTickets => {
      return {
        gte: index * GROUP_BY_RANGE + (index === 0 ? 0 : 0.01),
        lte: index * GROUP_BY_RANGE + GROUP_BY_RANGE
      };
    }
  );
};
