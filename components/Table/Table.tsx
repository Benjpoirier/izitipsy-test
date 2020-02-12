import { ReactElement } from "react";
import * as styles from "./styles";
import { Data } from "../../pages";
import { useTable } from "./useTable";
const Table = ({ dataSource }: { dataSource: Data[] }): ReactElement => {
  const { formattedDataSource } = useTable(dataSource);

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Montant du billet</th>
          <th>Nombre de billets</th>
          <th>Bénéfice moyen</th>
        </tr>
      </thead>
      <tbody>
        {formattedDataSource.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.range}</td>
              <td>{data.numberOfTickets}</td>
              <td>{data.averageProfit}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
