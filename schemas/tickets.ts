import mongoose, { Document } from "mongoose";

export interface Ticket extends Document {
  tips: number;
  amount: number;
}

const ticketSchema = new mongoose.Schema({
  tips: Number,
  amount: Number
});

export default mongoose.models.Ticket ||
  mongoose.model<Ticket>("Ticket", ticketSchema);
