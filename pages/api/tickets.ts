import withDb from "../../utils/db";
import TicketEntity from "../../schemas/tickets";
import { createSetOfRangesFromMaxAmount } from "../../utils/createAggregateFromMaxAmount";

export default withDb(async (_req, res) => {
  const { amount: maxAmount } = await TicketEntity.findOne().sort([
    ["amount", -1]
  ]);
  const aggregate = createSetOfRangesFromMaxAmount(maxAmount);
  const concatConditions = aggregate.map(({ gte, lte }, index) => ({
    $cond: [
      { $and: [{ $gte: ["$amount", gte] }, { $lte: ["$amount", lte] }] },
      index,
      0
    ]
  }));
  const tickets = await TicketEntity.aggregate([
    {
      $project: {
        range: {
          $add: concatConditions
        },
        amount: 1,
        tips: 1
      }
    },
    {
      $group: {
        _id: "$range",
        tickets: {
          $push: "$$ROOT"
        }
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]);

  res.status(200).json({ tickets });
});
