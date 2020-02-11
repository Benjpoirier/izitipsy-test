const GROUP_BY_RANGE = 20;

interface SetOfRange {
  gte: number;
  lte: number;
}

export const createSetOfRangesFromMaxAmount = (
  maxAmount: number
): SetOfRange[] => {
  const length = maxAmount / GROUP_BY_RANGE;
  return Array.from(
    { length },
    (_item, index): SetOfRange => {
      return {
        gte: index * GROUP_BY_RANGE + (index === 0 ? 0 : 0.01),
        lte: index * GROUP_BY_RANGE + GROUP_BY_RANGE
      };
    }
  );
};
