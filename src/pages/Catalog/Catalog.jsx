import VehiclesList from "../../components/VehiclesList/VehiclesList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={css.catalogContainer}>
      <Filters />
      <VehiclesList />
    </div>
  );
}
