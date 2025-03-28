import style from "./TransactionList.module.css";
import { useSelector } from "react-redux";
import TransactionItem from "../TransactionItem/TransactionItem";

const getVisibleTransactions = (filter, trxData) => {
  if (filter === "all") {
    return trxData;
  } else if (filter === "earnings") {
    return trxData.filter((el) => el.category === "earning");
  } else if (filter === "expenses") {
    return trxData.filter((el) => el.category === "expense");
  }
};

const TransactionList = () => {
  const transactionData = useSelector((state) => state.expenses.transactions);
  const filterData = useSelector((state) => state.filter.status);

  const visibleTransactions = getVisibleTransactions(
    filterData,
    transactionData
  );

  return (
    <ul className={style.trxList}>
      {visibleTransactions.map((el) => (
        <li key={el.id}>
          <TransactionItem trx={el} />
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
