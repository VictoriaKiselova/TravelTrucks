import css from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <Logo />
      <Link className={css.navHomeLink} to="/">
        Home
      </Link>
      <Link className={css.navHomeLink} to="/catalog">
        Catalog
      </Link>
    </nav>
  );
}
