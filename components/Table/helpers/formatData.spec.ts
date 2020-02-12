import { formatData } from "./formatData";

describe("formatData", () => {
  const mockedData = [
    {
      _id: 0,
      tickets: [
        { amount: 10, tips: 1.21 },
        { amount: 10, tips: 1.25 },
        { amount: 12, tips: 1.66 }
      ]
    },
    {
      _id: 1,
      tickets: [
        { amount: 32, tips: 3.02 },
        { amount: 21, tips: 3.98 }
      ]
    },
    {
      _id: 1,
      tickets: [
        { amount: 52, tips: 4.49 },
        { amount: 41, tips: 5.03 },
        { amount: 44, tips: 5.75 },
        { amount: 42, tips: 5.15 }
      ]
    }
  ];
  it("should compute ouput for given structured data", () => {
    const data = formatData(mockedData, 2.9);
    expect(data).toEqual([
      {
        range: "< 20$",
        numberOfTickets: 3,
        averageProfit: 7.08
      },
      {
        range: "< 40$",
        numberOfTickets: 2,
        averageProfit: 10.11
      },
      {
        range: "< 60$",
        numberOfTickets: 4,
        averageProfit: 7.98
      }
    ]);
  });
});
