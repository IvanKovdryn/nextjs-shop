import { BsFillBookmarkFill, BsCart } from "react-icons/bs";
import styles from "./Header.module.css";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="text-green-900 md:text-base">Let's find your products!</h1>
      <div className={styles.wrapper}>
        <BsFillBookmarkFill size={24} />
        <Cart />
      </div>
    </header>
  );
};
export default Header;
