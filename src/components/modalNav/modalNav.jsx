import style from "./modalNav.module.css";
import { IoMdClose } from "react-icons/io";

import { FaHome } from "react-icons/fa";
import { IoMdSwap } from "react-icons/io";

import { NavLink } from "react-router-dom";

const ModalNav = ({ setModalIsOpen }) => {
  return (
    <div className={style.menuBackdrop}>
      <div className={`${style.container} ${style.mobileMenuContainer}`}>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
          className={style.mobileMenuCloseBtn}
        >
          <IoMdClose />
        </button>

        <nav className={style.navWrapper}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/transactions">
                <IoMdSwap />
                Add transactions
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ModalNav;
