import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatTable } from '../../service/service';

export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map(({ date, amount, price, id }, i) => (
          <Tr key={id}>
            <Td>{i + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{formatTable(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
