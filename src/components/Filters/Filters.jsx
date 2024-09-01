import { setFilters } from "../../redux/filters/slice.js";
import {
  selectorAC,
  selectorBathroom,
  selectorKitchen,
  selectorTV,
} from "../../redux/filters/selectors.js";
import { fetchFilterValue } from "../../redux/filters/operations.js";
import { useSelector, useDispatch } from "react-redux";
import Location from "../Location/Location.jsx";
import { selectorPage, selectorLimit } from "../../redux/vehicles/selectors";
import sprite from "../../Image/Icons.svg";
import css from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const page = useSelector(selectorPage);
  const limit = useSelector(selectorLimit);
  const filters = useSelector(state => state.filters);
  const AC = useSelector(selectorAC);
  const bathroom = useSelector(selectorBathroom);
  const kitchen = useSelector(selectorKitchen);
  const TV = useSelector(selectorTV);

  const handleFilterChange = filterName => {
    if (filterName === "transmission") {
      const newTransmission =
        filters.transmission === "Automatic" ? "" : "Automatic";
      dispatch(setFilters({ transmission: newTransmission }));
    } else {
      dispatch(setFilters({ [filterName]: !filters[filterName] }));
    }
  };

  const handleTypeChange = type => {
    const newForm = filters.form === type ? "" : type;
    const validTypes = ["Van", "Fully Integrated", "Alcove"];
    if (validTypes.includes(newForm)) {
      dispatch(setFilters({ form: newForm }));
    } else {
      dispatch(setFilters({ form: "" }));
    }
  };

  const handleRequest = () => {
    const filterParameters = Object.entries(filters)
      .filter(
        ([key, value]) =>
          value === true || (typeof value === "string" && value.trim() !== "")
      )
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    dispatch(fetchFilterValue({ page, limit, filterParameters }));
  };

  return (
    <div>
      <Location />
      <p className={css.filters}>Filters</p>
      <div className={css.filterContainer}>
        <h3 className={css.titleEquipment}>Vehicle equipment</h3>
        <hr className={css.line} />
        <ul className={css.equipmentList}>
          <li
            className={
              AC ? css.equipmentFilterItemActive : css.equipmentFilterItem
            }
            onClick={() => handleFilterChange("AC")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-wind"} />
            </svg>
            <p className={css.equipmentFilter}>AC</p>
          </li>
          <li
            className={
              filters.transmission === "Automatic"
                ? css.equipmentFilterItemActive
                : css.equipmentFilterItem
            }
            onClick={() => handleFilterChange("transmission")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-diagram"} />
            </svg>
            <p className={css.equipmentFilter}>Automatic</p>
          </li>
          <li
            className={
              kitchen ? css.equipmentFilterItemActive : css.equipmentFilterItem
            }
            onClick={() => handleFilterChange("kitchen")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-cup-hot"} />
            </svg>
            <p className={css.equipmentFilter}>Kitchen</p>
          </li>
          <li
            className={
              TV ? css.equipmentFilterItemActive : css.equipmentFilterItem
            }
            onClick={() => handleFilterChange("TV")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-tv"} />
            </svg>
            <p className={css.equipmentFilter}>TV</p>
          </li>
          <li
            className={
              bathroom ? css.equipmentFilterItemActive : css.equipmentFilterItem
            }
            onClick={() => handleFilterChange("bathroom")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-bi_droplet"} />
            </svg>
            <p className={css.equipmentFilter}>Bathroom</p>
          </li>
        </ul>

        <h3 className={css.titleEquipment}>Vehicle type</h3>
        <hr className={css.line} />
        <ul className={css.equipmentList}>
          <li
            className={
              filters.form === "Van"
                ? css.equipmentFilterItemActive
                : css.equipmentFilterItem
            }
            onClick={() => handleTypeChange("Van")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-bi_grid-1x2"} />
            </svg>
            <p className={css.equipmentFilter}>Van</p>
          </li>
          <li
            className={
              filters.form === "Fully Integrated"
                ? css.equipmentFilterItemActive
                : css.equipmentFilterItem
            }
            onClick={() => handleTypeChange("Fully Integrated")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-bi_grid"} />
            </svg>
            <p className={css.equipmentFilter}>Fully Integrated</p>
          </li>
          <li
            className={
              filters.form === "Alcove"
                ? css.equipmentFilterItemActive
                : css.equipmentFilterItem
            }
            onClick={() => handleTypeChange("Alcove")}>
            <svg className={css.icon}>
              <use href={sprite + "#icon-bi_grid-3x3-gap"} />
            </svg>
            <p className={css.equipmentFilter}>Alcove</p>
          </li>
        </ul>
      </div>
      <button className={css.linkCatalog} type="submit" onClick={handleRequest}>
        Search
      </button>
    </div>
  );
}
