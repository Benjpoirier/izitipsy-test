import mongoose from "mongoose";

const Schema = mongoose.Schema,
  ticketSchema = new Schema({
    tips: Number,
    amount: Number
  }),
  Ticket =
    mongoose.modelNames().indexOf("Ticket") == -1
      ? mongoose.model("Ticket", ticketSchema)
      : mongoose.model("Ticket");

export default Ticket;
