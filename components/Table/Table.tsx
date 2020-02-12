import { ReactElement } from "react";
import * as styles from "./styles";
import { Data } from "../../pages";
import { useTable } from "./useTable";
const Table = ({ dataSource }: { dataSource: Data[] }): ReactElement => {
  const { formattedDataSource, onChange, indice } = useTable(dataSource);

  return (
    <>
      <input type="number" value={indice} onChange={onChange} />
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
                <td align="center">{data.range}</td>
                <td align="center">{data.numberOfTickets}</td>
                <td align="center">{data.averageProfit}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
