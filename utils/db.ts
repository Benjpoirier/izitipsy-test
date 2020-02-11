import mongoose from "mongoose"
import { NextApiResponse, NextApiRequest } from "next";

type Handler = (request: NextApiRequest, response: NextApiResponse) => Promise<void>

export default (handler: Handler): Handler => async (req, res) => {
  const db = mongoose.connection;

  console.log("db.readyState", db.readyState);

  if (db.readyState == 1) {
    return handler(req, res);
  }

  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", () => {
    console.log("We are connected to the DB");
    return handler(req, res);
  });
};
