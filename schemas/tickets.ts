import mongoose, { Document } from "mongoose";

export interface Ticket extends Document {
  tips: number;
  amount: number;
}

const ticketSchema = new mongoose.Schema<Ticket>({
  tips: Number,
  amount: Number
});

export default mongoose.models.hasOwnProperty("Ticket")
  ? mongoose.model<Ticket>("Ticket")
  : mongoose.model<Ticket>("Ticket", ticketSchema);
