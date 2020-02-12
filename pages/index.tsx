import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import * as styles from "./styles";
import Table from "../components/Table/Table";

interface Ticket {
  amount: number;
  tips: number;
}
export interface Data {
  _id: number;
  tickets: Ticket[];
}
interface DashboardProps {
  data: Data[];
}

const Dashboard: NextPage<DashboardProps> = ({ data }) => {
  return (
    <div style={styles.container}>
      <h1>
        <img src="/images/simplyk-logo.png" style={styles.img} />
      </h1>
      <h2 style={styles.h2}>Bénéfice par prix du billet</h2>
      <span style={styles.divider} />
      <Table dataSource={data} />
    </div>
  );
};

Dashboard.getInitialProps = async (): Promise<DashboardProps> => {
  const response = await fetch("http://localhost:3000/api/tickets");
  const data = await response.json();
  return { data: data.tickets };
};

export default Dashboard;
