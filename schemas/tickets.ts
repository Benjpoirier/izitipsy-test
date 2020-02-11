import mongoose, { Document } from "mongoose";
export interface Ticket extends Document {
  tips: number;
  amount: number;
}

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  tips: Number,
  amount: Number
});

export default mongoose.modelNames().includes("tickets")
  ? mongoose.model<Ticket>("Ticket", ticketSchema)
  : mongoose.model<Ticket>("Ticket");
