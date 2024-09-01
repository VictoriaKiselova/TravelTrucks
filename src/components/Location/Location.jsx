import sprite from "../../Image/Icons.svg";
import { selectorLocation } from "../../redux/filters/selectors.js";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/filters/slice.js";
import css from "./Location.module.css";

export default function Location() {
  const location = useSelector(selectorLocation);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilters({ location: event.target.value }));
  };
  
  return (
    <label htmlFor="location" className={css.labelLocation}>
      Location
      <div className={css.inputWrapper}>
        <svg className={css.iconMap}>
          <use href={sprite + "#icon-Map"} />
        </svg>
        <input
          type="text"
          name="location"
          placeholder="City"
          className={css.inputLocation}
          value={location}
          onChange={handleChange}
        />
      </div>
    </label>
  );
}
