import style from "./AppBar.module.css";

//* Libraries
import { FcMoneyTransfer } from "react-icons/fc";

//* Components
import TrxCounter from "../TrxCounter/TrxCounter";
import TrxFilter from "../TrxFilter/TrxFilter";

const AppBar = () => {
  return (
    <>
      <header className={style.headerWrapper}>
        <h1>
          <FcMoneyTransfer size={25} />
          Money Tracker
        </h1>
        <div className={style.filterWrapper}>
          <TrxFilter />
        </div>
      </header>

      <TrxCounter />
    </>
  );
};

export default AppBar;
