import sprite from "../../Image/Icons.svg";
import css from "./Location.module.css";

export default function Location() {
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
        />
      </div>
    </label>
  );
}
