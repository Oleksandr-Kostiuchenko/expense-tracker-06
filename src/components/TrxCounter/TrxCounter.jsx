import style from "./TrxCounter.module.css";
import { useSelector } from "react-redux";
import { FcMoneyTransfer } from "react-icons/fc";

const TrxCounter = () => {
  const transactionData = useSelector((state) => state.expenses);

  const count = transactionData.transactions.reduce(
    (acc, el) => {
      if (el.category === "expense") {
        acc.expenses += 1;
      } else if (el.category === "earning") {
        acc.earning += 1;
      }

      return acc;
    },
    {
      expenses: 0,
      earning: 0,
    }
  );

  return (
    <div className={style.counterWrapper}>
      <img className={style.cardImg} src="../../../public/card.png" alt="" />
      <div className={style.infoWrapper}>
        <p className={style.balanceWrapper}>{transactionData.totalBalance}$</p>
        <div className={style.descriptionWrapper}>
          <p>Earnings: {count.expenses}</p>
          <p>Expenses: {count.earning}</p>
        </div>
      </div>
    </div>
  );
};

export default TrxCounter;
