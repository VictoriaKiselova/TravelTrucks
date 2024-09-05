import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundWrapper}>
      <h3 className={css.notFound}>
        Please visit out{" "}
        <Link to="/" className={css.link}>
          Home
        </Link>
      </h3>
    </div>
  );
}
