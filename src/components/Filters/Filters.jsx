import { Link } from "react-router-dom";
import css from "./Filters.module.css";
import Location from "../Location/Location.jsx";
import sprite from "../../Image/Icons.svg";

export default function Filters() {
  return (
    <div>
      <Location />
      <p className={css.filters}>Filters</p>
      <h3 className={css.titleEquipment}>Vehicle equipment</h3>
      <hr className={css.line} />
      <ul className={css.equipmentList}>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-wind"} />
          </svg>
          <p className={css.equipmentFilter}>AC</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-diagram"} />
          </svg>
          <p className={css.equipmentFilter}>Automatic</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-cup-hot"} />
          </svg>
          <p className={css.equipmentFilter}>Kitchen</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-tv"} />
          </svg>
          <p className={css.equipmentFilter}>TV</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-bi_droplet"} />
          </svg>
          <p className={css.equipmentFilter}>Bathroom</p>
        </li>
      </ul>

      <h3 className={css.titleEquipment}>Vehicle type</h3>
      <hr className={css.line} />
      <ul className={css.equipmentList}>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-bi_grid-1x2"} />
          </svg>
          <p className={css.equipmentFilter}>Van</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-bi_grid"} />
          </svg>
          <p className={css.equipmentFilter}>Fully Integrated</p>
        </li>
        <li className={css.equipmentFilterItem}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-bi_grid-3x3-gap"} />
          </svg>
          <p className={css.equipmentFilter}>Alcove</p>
        </li>
      </ul>
      <Link className={css.linkCatalog} to="/catalog">
        Search
      </Link>
    </div>
  );
}
