import style from "./TrxFilter.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";

const TrxFilter = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.status);

  const handleClick = (status) => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div className={style.btnFilterWrapper}>
      <Button
        onClick={() => handleClick("all")}
        selected={filterData === "all"}
      >
        All
      </Button>
      <Button
        onClick={() => handleClick("earnings")}
        selected={filterData === "earnings"}
      >
        Earnings
      </Button>
      <Button
        onClick={() => handleClick("expenses")}
        selected={filterData === "expenses"}
      >
        Expenses
      </Button>
    </div>
  );
};

export default TrxFilter;
