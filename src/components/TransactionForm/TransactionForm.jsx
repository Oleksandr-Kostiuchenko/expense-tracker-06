//* Style & libraries
import style from "./TransactionForm.module.css";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import { dateConstructor } from "../../redux/transactionsSlice";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

//* Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const TransactionSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Transaction name is required"),
  value: Yup.number()
    .positive("Value must be positive")
    .required("Transaction value is required"),
  type: Yup.string()
    .oneOf(["earning", "expense"], "Invalid transaction type")
    .required("Transaction type is required"),
});

//* Redux
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../redux/transactionsSlice";

//* Components
import Button from "../Button/Button";
import ModalNav from "../modalNav/modalNav";

const TransactionForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const balanceData = useSelector((state) => state.expenses.totalBalance);
  const transactionData = useSelector((state) => state.expenses.transactions);

  const handleSubmit = (values, actions) => {
    if (values.type === "expense" && balanceData < values.value) {
      toast("Insufficent funds!", {
        icon: "❌",
      });
      return;
    }

    dispatch(
      addTransaction({
        id: nanoid(),
        text: values.name,
        category: values.type,
        amount: values.value,
        date: dateConstructor(),
      })
    );

    actions.resetForm();

    if (values.type === "earning") {
      if (transactionData.length === 0) {
        toast("First successfull deposit!", {
          icon: "💰",
        });
        return;
      }
      toast("Transaction added!", {
        icon: "💵",
      });
    } else if (values.type === "expense") {
      toast("Transaction added!", {
        icon: "💸",
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          value: "",
          type: "earning",
        }}
        validationSchema={TransactionSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={style.formWrapper} autoComplete="off">
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                className={style.inputWrapper}
                type="text"
              />
            </div>

            <div>
              <label htmlFor="value">Value:</label>
              <Field
                id="value"
                name="value"
                className={style.inputWrapper}
                type="number"
              />
            </div>

            <div>
              <div className={style.radioWrapper}>
                <div className={style.radioWrapperEl}>
                  <Field
                    id="earning"
                    type="radio"
                    name="type"
                    value="earning"
                  />
                  <label htmlFor="earning">Earning</label>
                </div>

                <div className={style.radioWrapperEl}>
                  <Field
                    id="expense"
                    type="radio"
                    name="type"
                    value="expense"
                  />
                  <label htmlFor="expense">Expense</label>
                </div>
              </div>
            </div>

            <Button type="submit">Add transaction</Button>
          </Form>
        )}
      </Formik>
      <button onClick={() => setModalIsOpen(true)} className={style.modalBtn}>
        <IoIosMenu color="white" size={30} />
      </button>
      {modalIsOpen && <ModalNav setModalIsOpen={setModalIsOpen} />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default TransactionForm;
