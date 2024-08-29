import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.hero}>
      <h1 className={css.titleHero}>Campers of your dreams</h1>
      <p className={css.herosubTitle}>You can find everything you want in our catalog</p>
      <Link className={css.linkCatalog} to="/catalog">View Now</Link>
    </div>
  );
}
