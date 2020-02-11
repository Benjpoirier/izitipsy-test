import withDb from "../../utils/db";
import TicketEntity from "../../schemas/tickets"

export default withDb(async (_req, res) => {
    const tickets = await TicketEntity.find();

    res.status(200).json(tickets)
});
