import { setFilters } from "../../redux/filters/slice.js";
import {
  selectorAC,
  selectorBathroom,
  selectorKitchen,
  selectorTV,
} from "../../redux/filters/selectors.js";
import { fetchFilterVehicles } from "../../redux/filters/operations.js";
import { useSelector, useDispatch } from "react-redux";
import Location from "../Location/Location.jsx";
import Icon from "../Icon/Icon.jsx";
import css from "./Filters.module.css";

export default function Filters({ setShowFilters }) {
  const dispatch = useDispatch();
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
    if (Object.keys(filterParameters).length === 0) {
      return;
    }
    dispatch(fetchFilterVehicles({ filterParameters }));
    setShowFilters(false);
  };

  return (
    <div className={css.filterWrapper}>
      <Location />
      <div className={css.filterContainer}>
        <div className={css.equipmentContainer}>
          <h3 className={css.titleEquipment}>Vehicle equipment</h3>
          <hr className={css.line} />
          <ul className={css.equipmentList}>
            <li
              className={
                AC ? css.equipmentFilterItemActive : css.equipmentFilterItem
              }
              onClick={() => handleFilterChange("AC")}>
              <Icon iconId={"icon-wind"} className={css.iconActive} />
              <p className={css.equipmentFilter}>AC</p>
            </li>
            <li
              className={
                filters.transmission === "Automatic"
                  ? css.equipmentFilterItemActive
                  : css.equipmentFilterItem
              }
              onClick={() => handleFilterChange("transmission")}>
              <Icon iconId={"icon-diagram"} />
              <p className={css.equipmentFilter}>Automatic</p>
            </li>
            <li
              className={
                kitchen
                  ? css.equipmentFilterItemActive
                  : css.equipmentFilterItem
              }
              onClick={() => handleFilterChange("kitchen")}>
              <Icon iconId={"icon-cup-hot"} />
              <p className={css.equipmentFilter}>Kitchen</p>
            </li>
            <li
              className={
                TV ? css.equipmentFilterItemActive : css.equipmentFilterItem
              }
              onClick={() => handleFilterChange("TV")}>
              <Icon iconId={"icon-tv"} />
              <p className={css.equipmentFilter}>TV</p>
            </li>
            <li
              className={
                bathroom
                  ? css.equipmentFilterItemActive
                  : css.equipmentFilterItem
              }
              onClick={() => handleFilterChange("bathroom")}>
              <Icon iconId={"icon-bi_droplet"} />
              <p className={css.equipmentFilter}>Bathroom</p>
            </li>
          </ul>
        </div>

        <div>
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
              <Icon iconId={"icon-bi_grid-1x2"} />
              <p className={css.equipmentFilter}>Van</p>
            </li>
            <li
              className={
                filters.form === "Fully Integrated"
                  ? css.equipmentFilterItemActive
                  : css.equipmentFilterItem
              }
              onClick={() => handleTypeChange("Fully Integrated")}>
              <Icon iconId={"icon-bi_grid"} />
              <p className={css.equipmentFilter}>Fully Integrated</p>
            </li>
            <li
              className={
                filters.form === "Alcove"
                  ? css.equipmentFilterItemActive
                  : css.equipmentFilterItem
              }
              onClick={() => handleTypeChange("Alcove")}>
              <Icon iconId={"icon-bi_grid-3x3-gap"} />
              <p className={css.equipmentFilter}>Alcove</p>
            </li>
          </ul>
        </div>
      </div>
      <button className={css.linkCatalog} type="submit" onClick={handleRequest}>
        Search
      </button>
    </div>
  );
}
