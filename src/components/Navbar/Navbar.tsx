import { Link } from "react-router-dom";

import style from "../Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.navBarContainer}>
      <div className={style.logoContainer}>
        <img src="logo.svg" alt="" />
      </div>
      <div className={style.navBarElements}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </div>
    </div>
  );
};

export default Navbar;
