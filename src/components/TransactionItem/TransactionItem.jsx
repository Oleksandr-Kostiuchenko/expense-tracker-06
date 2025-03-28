import style from "./TransactionItem.module.css";

//* Icons
import { TbCreditCardPay } from "react-icons/tb";
import { TbCreditCardRefund } from "react-icons/tb";
import { MdAddCard } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

//* Redux
import { useDispatch } from "react-redux";
import { removeTransaction } from "../../redux/transactionsSlice";

const TransactionItem = ({ trx }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTransaction(trx));
  };

  return (
    <div className={style.trxWrapper}>
      <div className={style.nameWrapper}>
        {trx.category === "expense" ? (
          <TbCreditCardPay size={30} />
        ) : (
          <MdAddCard size={30} />
        )}

        <div className={style.trxDataWrapper}>
          <div>
            <p>{trx.text}</p>
            <p className={style.id}>{trx.date}</p>
          </div>
          <p>
            {trx.category === "expense" ? "- " : "+ "}
            {trx.amount}$
          </p>
        </div>
      </div>

      <button onClick={handleClick} className={style.deleteBtn}>
        <RxCrossCircled className={style.deleteIcon} />
      </button>
    </div>
  );
};

export default TransactionItem;
