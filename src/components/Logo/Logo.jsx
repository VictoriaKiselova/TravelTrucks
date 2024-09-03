import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <h3>
        Travel<span className={css.logoTrucks}>Trucks</span>
      </h3>
    </Link>
  );
}
