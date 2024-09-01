import css from "./ListDetails.module.css";

export default function ListDetails({ elem }) {
  const { form, length, width, height, tank, consumption } = elem;
  return (
    <div>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <hr className={css.lined} />
      <ul className={css.detailsList}>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Form</p>
          <p className={css.itemValue}>{form}</p>
        </li>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Length</p>
          <p className={css.itemValue}>{length}</p>
        </li>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Width</p>
          <p className={css.itemValue}>{width}</p>
        </li>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Height</p>
          <p className={css.itemValue}>{height}</p>
        </li>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Tank</p>
          <p className={css.itemValue}>{tank}</p>
        </li>
        <li className={css.detailsItemVehicle}>
          <p className={css.itemValue}>Consumption</p>
          <p className={css.itemValue}>{consumption}</p>
        </li>
      </ul>
    </div>
  );
}
