import style from "./TrxCounter.module.css";
import { useSelector } from "react-redux";
import { FcMoneyTransfer } from "react-icons/fc";
import { useEffect, useState } from "react";

import clsx from "clsx";

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

  const [percentageChange, setPercentageChange] = useState(0);
  let prevBalance = 0;
  const positive = percentageChange > 0;

  for (let i = 0; i < transactionData.transactions.length - 1; i++) {
    if (transactionData.transactions[i].category === "earning") {
      prevBalance += transactionData.transactions[i].amount;
    } else {
      prevBalance -= transactionData.transactions[i].amount;
    }
  }

  useEffect(() => {
    const percentantage = Math.floor(
      ((transactionData.totalBalance - prevBalance) / prevBalance) * 100
    );
    if (isNaN(percentantage)) {
      setPercentageChange(0);
      return;
    }
    if (transactionData.transactions.length === 0) {
      setPercentageChange(0);
      return;
    }
    if (percentantage >= 999) {
      setPercentageChange(999);
      return;
    } else if (percentantage <= -999) {
      setPercentageChange(-999);
      return;
    }
    setPercentageChange(percentantage);
  }, [transactionData]);

  return (
    <div className={style.counterWrapper}>
      <img className={style.cardImg} src="./card.png" alt="" />
      <div className={style.infoWrapper}>
        <p className={style.balanceWrapper}>{transactionData.totalBalance}$</p>
        <p
          className={clsx(
            style.statsNum,
            positive ? style.positive : style.negative
          )}
        >
          {positive && "+"}
          {percentageChange}%
        </p>
        <div className={style.descriptionWrapper}>
          <p>Earnings: {count.earning}</p>
          <p>Expenses: {count.expenses}</p>
        </div>
      </div>
    </div>
  );
};

export default TrxCounter;
