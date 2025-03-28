import { useState } from "react";
import style from "./HomePage.module.css";

import { IoIosMenu } from "react-icons/io";

//* Components
import AppBar from "../../components/AppBar/AppBar";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionList from "../../components/TransactionList/TransactionList";
import ModalNav from "../../components/modalNav/modalNav";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <AppBar />
      <button onClick={() => setModalIsOpen(true)} className={style.modalBtn}>
        <IoIosMenu color="white" size={30} />
      </button>
      <TransactionList />
      {modalIsOpen && <ModalNav setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default HomePage;
