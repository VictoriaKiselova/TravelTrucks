import css from "./Logo.module.css";

export default function Logo() {
  return (
    <h3 className={css.logo}>
      Travel<span className={css.logoTrucks}>Trucks</span>
    </h3>
  );
}
