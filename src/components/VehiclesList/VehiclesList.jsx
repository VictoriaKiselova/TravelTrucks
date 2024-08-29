import sprite from "../../Image/Icons.svg";
import { Link } from "react-router-dom";
import css from "./VehiclesList.module.css";

export default function VehiclesList() {
  return (
    <ul>
      <li>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>

          <svg className={css.icon}>
            <use href={sprite + "#icon-star"} />
          </svg>
          <p></p>
          <Link className={css.linkCatalog} to="/catalog">
            Show more
          </Link>
        </div>
      </li>
    </ul>
  );
}
