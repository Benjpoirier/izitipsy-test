import { NextPage } from "next";
import { Ticket } from "../schemas/tickets";
import fetch from "isomorphic-unfetch";
interface DashboardProps {
  tickets: Ticket[];
}

const Dashboard: NextPage<DashboardProps> = ({ tickets }) => {
  return <>Dashboard</>;
};

Dashboard.getInitialProps = async (): Promise<DashboardProps> => {
  const response = await fetch("http://localhost:3000/api/tickets");
  const tickets = await response.json();
  return { tickets };
};

export default Dashboard;
